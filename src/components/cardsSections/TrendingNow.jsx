import React,{useState,useEffect} from 'react'
import Carousel from '../Carousel/Carousel'
import axios from 'axios';
function TrendingNow() {
    const [trendingMovies, setTrendingMovies] = useState([]);

    useEffect(() => {
        const fetchTrendingMovies = () => {
          const url=`${import.meta.env.VITE_TrendingMovies}?api_key=${import.meta.env.VITE_ApiKey}`
            axios.get(url)
                .then((response) => {
                    // console.log(response.results)
                    setTrendingMovies(response.data.results.slice(11,))
                }
                )
        }
        fetchTrendingMovies();
    }, []);
  return (
    <>
    <Carousel topicName="Trending Now" movies={trendingMovies}/>
    </>
  )
}

export default TrendingNow
