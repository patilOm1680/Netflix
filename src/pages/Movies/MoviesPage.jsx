import React, { useContext, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import TrendingNow from '../../components/cardsSections/TrendingNow';
import PopularNow from '../../components/cardsSections/PopularNow';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoIcon from '@mui/icons-material/Info';
import TopRatedTV from '../../components/Web-Series-Section/TopRatedTV';
import UpcomingMovies from '../../components/Movies-Section/UpcomingMovies';
import Footer from '../Footer/Footer';
import facebookImg from "../../assets/Footer/Facebook.png"
import instaImg from "../../assets/Footer/Instagram.png"
import twitterImg from "../../assets/Footer/Twitter.png"
import youtubeImg from "../../assets/Footer/YouTube.png"
import PopularTV from '../../components/Web-Series-Section/PopularTV';
import TrendingTV from '../../components/Web-Series-Section/TrendingTV';
import Upcomingshows from '../../components/Web-Series-Section/UpcomingShows';
import TopRatedMovies from '../../components/Movies-Section/TopRatedMovies';
import TVshowSkeleton from '../TVShows/TVshowSkeleton';
import UserContext from '../../context/UserContext';

function MoviesPage() {
   const { isMoviesLoading, setIsMovieLoading } = useContext(UserContext)
  useEffect(() => {
    setTimeout(() => {
      setIsMovieLoading(false)
    }, 1000)
    
    
  }, [isMoviesLoading]);
  return (
    <>
    {isMoviesLoading?<TVshowSkeleton/>
    :
      <div>
    
          <Navbar/>
      
      
      <div className="relative bg-black pt-22">
        <div className="relative w-full overflow-hidden h-[650px]">
          <div className="absolute inset-0">
            <iframe
              className="w-full h-full object-cover"
              src={import.meta.env.VITE_MovieYt}
              title="Stranger things Trailer"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              style={{ pointerEvents: 'none', transform: 'scale(1.5)', transformOrigin: 'center' }}
            />
          </div>

          <div className="absolute inset-y-0 left-0 w-2/5 bg-linear-to-r from-black/90 via-black/50 to-transparent" />


          <div className="absolute inset-y-0 right-0 w-1/4 bg-linear-to-l from-black/70 to-transparent" />
          <div className="absolute top-0 left-0 right-0 h-32 bg-linear-to-b from-black/90 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 h-64 bg-linear-to-t from-black via-black/60 to-transparent" />

          <div className="relative z-10 flex flex-col justify-end h-full px-22 pb-20">
           
            <div className="flex items-center mb-4">
              <div className="bg-red-600 text-white font-bold px-3 py-2 rounded text-sm flex flex-col items-center leading-tight">
                <span className="text-xs">Top 10</span>

              </div>
              <span className="text-white ml-3 text-base font-semibold">#1 in Movies Today</span>
            </div>

            <div className="mb-5">
              <h1 className="text-5xl font-bold text-red-600 font-serif text-shadow-[3px 3px 10px rgba(0,0,0,0.8)]">
                FRANKENSTEIN
              </h1>
            </div>
            <p className="text-white text-lg max-w-xl mb-7 leading-relaxed pe-[60px]">
              An ambitious scientist who creates a sapient creature in an unorthodox experiment but flees in horror
            </p>



            <div className="flex items-center gap-4 mb-7">
              <button className="flex items-center gap-3 bg-white text-black font-bold px-10 py-3 rounded text-lg hover:bg-gray-200 transition">
                <PlayArrowIcon />
                Play
              </button>
              <button className="flex items-center gap-3 bg-gray-600 bg-opacity-70 text-white font-semibold px-8 py-3 rounded text-lg hover:bg-opacity-50 transition">
                <InfoIcon />
                More Info
              </button>
            </div>


          </div>
        </div>



        <div className="relative px-16 mt-[-60px] z-40">
          <PopularNow />

          <div className='mt-10'>
            <TrendingNow/>
          </div>
          <div className='mt-10'>
            <TopRatedMovies />
          </div>
          <div className='mt-10'>
            <UpcomingMovies />
          </div>
        </div>
      </div>
      <div className='px-20 pt-20'>
        <div className='flex gap-22 mb-7'>
          <div>
            <img src={facebookImg} alt="facebook logo" />
          </div>
          <div>
            <img src={twitterImg} alt="facebook logo" />
          </div>
          <div>
            <img src={instaImg} alt="facebook logo" />
          </div>
          <div>
            <img src={youtubeImg} alt="facebook logo" />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  }
    </>
    

  );
}

export default MoviesPage;