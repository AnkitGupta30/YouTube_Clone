import React, {createContext, useState, useEffect} from "react";
import {fetchDataFromApi} from "../utils/api";

export const context = createContext();

export const AppContext = (props) =>{
    const [loading, setLoading] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const [selectCategories, setSelectCategories] = useState("New");
    const [mobileMenu, setmobileMenu] = useState(false);

    useEffect(() =>{

        fetchSelectedCategoryData(selectCategories)
    },[selectCategories]);

    const fetchSelectedCategoryData = (query) =>{
        setLoading(true);
        fetchDataFromApi(`search/?q=${query}`).then(({contents}) =>{
            console.log(contents);
            setSearchResults(contents);
            setLoading(false);
        }).catch((error)=>{
            console.log(error);
        })
       
        
    };

    return(
        <context.Provider value={{
            loading,
            setLoading,
            searchResults,
            setSearchResults,
            selectCategories,
            setSelectCategories,
            mobileMenu,
            setmobileMenu,

        }}>
        {props.children}
        </context.Provider>
    );

};