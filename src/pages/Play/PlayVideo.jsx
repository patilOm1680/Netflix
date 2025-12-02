import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import YouTube from 'react-youtube';

function PlayVideo() {
    const location=useLocation();
    const {movieId}=location.state;
    // const [videoData, setVideoData]=useState([]);
    const [videoKey,setKey]=useState("");
    
    useEffect(() => {
      const url=`${import.meta.env.VITE_VideoKey}/${movieId}/videos?api_key=${import.meta.env.VITE_ApiKey}`
        axios.get(url)
        .then((response)=>{
            let videoData=response.data.results;
            for(let obj of videoData){
                if(obj.type=="Trailer"){
                    console.log(obj.key)
                    setKey(obj.key);
                    break;
                }
                
            }

        })
    }, []);

   const opts = {
      height: '925px',
      width: '1850px',
      playerVars: {
        autoplay: 1,
      },
    };
  return (
    <div className='bg-black h-screen'>
      {/* <video src='https://www.youtube.com/watch?v=sEgPQ7HKoBA'></video> */}
      <YouTube videoId={videoKey} opts={opts}/>
    </div>
  )
}

export default PlayVideo
