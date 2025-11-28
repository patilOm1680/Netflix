import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Carousel from '../Carousel/Carousel';
function TopRatedMovies() {
  const [topRatedMovies, setTopRatedMovies] = useState([]);
    useEffect(() => {
        const fetchTrendingMovies = () => {
          const url=`${import.meta.env.VITE_TopRatedMovies}?api_key=${import.meta.env.VITE_ApiKey}`
            axios.get(url)
                .then((response) => {
                    // console.log(response.results)
                    setTopRatedMovies(response.data.results)
                }
                )
        }
        fetchTrendingMovies();
    }, []);
  return (
    <>
    <Carousel topicName="Top Rated Movies" movies={topRatedMovies}/>
    </>
  )
}

export default TopRatedMovies
