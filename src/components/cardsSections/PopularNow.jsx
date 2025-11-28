import React, { useEffect, useState } from 'react'
import Carousel from '../Carousel/Carousel';
import axios from 'axios';
import HeroCarsouel from '../Hero/HeroCarsouel';
function PopularNow() {
    const [popularMovies, setPopularMovies] = useState([]);

    useEffect(() => {
        const fetchTrendingMovies = () => {
            const url=`${import.meta.env.VITE_PopularMovies}?api_key=${import.meta.env.VITE_ApiKey}`
            axios.get(url)
                .then((response) => {
                    // console.log(response.results)
                    setPopularMovies(response.data.results)
                }
                )
        }
        fetchTrendingMovies();
    }, []);
  return (
    <>
    <HeroCarsouel topicName="Today's Picks for You" movies={popularMovies}/>
    </>
  )
}

export default PopularNow
