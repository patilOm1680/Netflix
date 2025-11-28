import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Carousel from '../Carousel/Carousel';
function TopRatedTV() {
  const [topRatedShows, setTopRatedShows] = useState([]);
    useEffect(() => {
        const fetchTrendingMovies = () => {
          const url=`${import.meta.env.VITE_TopRatedShows}?api_key=${import.meta.env.VITE_ApiKey}`
            axios.get(url)
                .then((response) => {
                    // console.log(response.results)
                    setTopRatedShows(response.data.results)
                }
                )
        }
        fetchTrendingMovies();
    }, []);
  return (
    <>
    <Carousel topicName="Top Rated Shows" movies={topRatedShows}/>
    </>
  )
}

export default TopRatedTV
