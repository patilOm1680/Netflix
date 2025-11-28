import React,{useState,useEffect} from 'react'
import Carousel from '../Carousel/Carousel.jsx'
import axios from 'axios';
function TrendingTV() {
    const [trendingShows, setTrendingShows] = useState([]);

    useEffect(() => {
        const fetchTrendingMovies = () => {
          const url=`${import.meta.env.VITE_TrendingShows}?api_key=${import.meta.env.VITE_ApiKey}`
            axios.get(url)
                .then((response) => {
                    // console.log(response.results)
                    setTrendingShows(response.data.results.slice(11,))
                }
                )
        }
        fetchTrendingMovies();
    }, []);
  return (
    <>
    <Carousel topicName="Trending Now" movies={trendingShows}/>
    </>
  )
}

export default TrendingTV
