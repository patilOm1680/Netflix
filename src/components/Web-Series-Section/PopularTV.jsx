import React, { useEffect, useState } from 'react'
import axios from 'axios';
import HeroCarsouel from '../Hero/HeroCarsouel.jsx';
function PopularTV() {
    const [popularShows, setPopularShows] = useState([]);

    useEffect(() => {
        const fetchTrendingMovies = () => {
            const url=`${import.meta.env.VITE_PopularShows}?api_key=${import.meta.env.VITE_ApiKey}`
            axios.get(url)
                .then((response) => {
                    // console.log(response.results)
                    setPopularShows(response.data.results)
                }
                )
        }
        fetchTrendingMovies();
    }, []);
  return (
    <>
    <HeroCarsouel topicName="Popular on Netflix" movies={popularShows}/>
    </>
  )
}

export default PopularTV
