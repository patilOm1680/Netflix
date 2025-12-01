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
        axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=08e5aa051cefb63e37d8363be920afd3`)
        .then((response)=>{
            let videoData=response.data.results;
            for(let obj of videoData){
                if(obj.type=="Trailer"){
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
