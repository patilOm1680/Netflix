import React, { useContext } from 'react'
import Navbar from '../../pages/Navbar/Navbar'
import SearchCard from '../SearchBar/SearchCard';
import UserContext from '../../context/UserContext';


function MyList() {
    const {watchListData}=useContext(UserContext)
    
  return (
    <>
    <Navbar/>

    <p className='text-2xl text-white pt-28 px-22 mb-5 font-bold'>Your Watchlist</p>
    <div className='text-white flex items-center gap-10 flex-wrap px-22 w-full '>
        
        {
            watchListData.map((obj,index)=>{
                if(obj.poster_path!==null && obj.backdrop_path!==null)
                return <div>
                    {console.log(obj)}
                    <SearchCard movie={obj} index={index}/>
                </div>
            })
        }
    </div>
    </>
  )
}

export default MyList
