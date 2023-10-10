import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
    // method: 'GET',
    // url: 'https://youtube138.p.rapidapi.com/auto-complete/',
    params: { hl: "en", gl: "US" },
    headers: {
        // "X-RapidAPI-Key": process.env.REACT_APP_YOUTUBE_API_KEY,
        "X-RapidAPI-Key": '1e253c0382mshcdf0b793c29a0bap149791jsn53a96525bf84',
        "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
    },
};

export const fetchDataFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;   
};


