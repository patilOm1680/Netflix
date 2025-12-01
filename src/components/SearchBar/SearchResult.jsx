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

    <p className='text-2xl text-white pt-28 px-22 mb-5 font-bold'>Top Results</p>
    <div className='text-white flex items-center gap-10 flex-wrap px-22 w-full'>
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
