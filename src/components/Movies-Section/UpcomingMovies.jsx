import React, { useEffect, useState } from 'react'
import Carousel from '../Carousel/Carousel';
import axios from 'axios';

function UpcomingMovies() {
    const [upcomingMovies, setUpcomingMovies] = useState([]);
    useEffect(() => {
        const fetchTrendingMovies = () => {
          const url=`${import.meta.env.VITE_UpcomingMovies}?api_key=${import.meta.env.VITE_ApiKey}`
            axios.get(url)
                .then((response) => {
                    // console.log(response.results)
                    setUpcomingMovies(response.data.results.slice(2,))
                }
                )
        }
        fetchTrendingMovies();
    }, []);
  return (
    <>
    <Carousel topicName="Upcoming Movies" movies={upcomingMovies}/>
    </>
  )
}

export default UpcomingMovies
