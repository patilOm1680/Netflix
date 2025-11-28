import React,{useState,useEffect} from 'react'
import Carousel from '../Carousel/Carousel.jsx'
import axios from 'axios';
function Upcomingshows() {
    const [upcomingshows, setUpcomingShows] = useState([]);

    useEffect(() => {
        const fetchTrendingMovies = () => {
          const url=`${import.meta.env.VITE_UpcomingShows}?api_key=${import.meta.env.VITE_ApiKey}`
            axios.get(url)
                .then((response) => {
                    // console.log(response.results)
                    setUpcomingShows(response.data.results.slice(11,))
                }
                )
        }
        fetchTrendingMovies();
    }, []);
  return (
    <>
    <Carousel topicName="Upcoming Shows" movies={upcomingshows}/>
    </>
  )
}

export default Upcomingshows
