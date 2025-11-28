import { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider=({children})=>{
    const [isLogin,setIsLogin]=useState(localStorage.getItem("isLogin"));
    const [watchListData,setWatchListData]=useState([]);

    return(
        <UserContext.Provider value={{isLogin,setIsLogin,watchListData,setWatchListData}}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContextProvider