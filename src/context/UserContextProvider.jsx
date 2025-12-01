import { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider=({children})=>{
    const [isLogin,setIsLogin]=useState(localStorage.getItem("isLogin"));
    const [watchListData,setWatchListData]=useState([]);
    const [TvshowLoading,setTvShowLoading]=useState(true);
    const [isMoviesLoading,setIsMovieLoading]=useState(true);
    const [isHomeLoading,setIsHomeLoading]=useState(true);
    return(
        <UserContext.Provider value={{isLogin,setIsLogin,watchListData,setWatchListData,TvshowLoading,setTvShowLoading,isMoviesLoading,setIsMovieLoading,isHomeLoading,setIsHomeLoading}}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContextProvider