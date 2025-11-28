import React from 'react'
import Navbar from '../../pages/Navbar/Navbar'
import { useLocation } from 'react-router-dom'
import SearchCard from './SearchCard';

function SearchResult() {
    const location=useLocation();
    const {Data}=location.state;

  return (
    <>
    <Navbar/>


    <div className='text-white flex items-center gap-10 flex-wrap px-22 w-full pt-22'>
        {
            Data.map((obj,index)=>{
                if(obj.poster_path!==null && obj.backdrop_path!==null)
                return <div>
                    {/* {console.log(obj)} */}
                    <SearchCard movie={obj} index={index}/>
                </div>
            })
        }
    </div>
    </>
  )
}

export default SearchResult
