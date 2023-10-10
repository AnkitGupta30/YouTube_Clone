import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Feed from "./components/Feed";
import SerachResult from "./components/SearchResult";
import VideoDetails from "./components/VideoDetails";
import {AppContext} from "./context/contextApi";

function App() {
  return (
    <AppContext>
      <BrowserRouter>
      <div className="flex flex-col h-full">
      <Header/>

      <Routes>
        <Route path="/" exact element={<Feed/>}/>
        <Route path="/searchResult/:searchQuery" element={<SerachResult/>}/>
        <Route path="/video/:id" element={<VideoDetails/>}/>
      </Routes>
      </div>
      </BrowserRouter>
    </AppContext>
  );
}

export default App;
