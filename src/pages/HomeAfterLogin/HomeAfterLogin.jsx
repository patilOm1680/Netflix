import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import HeroSection from '../../components/Hero/HeroSection'
import TrendingNow from '../../components/cardsSections/TrendingNow'
import PopularNow from '../../components/cardsSections/PopularNow'
import TopRatedTV from '../../components/Web-Series-Section/TopRatedTV'
import Footer from '../Footer/Footer'
import UpcomingMovies from '../../components/Movies-Section/UpcomingMovies'
import facebookImg from "../../assets/Footer/Facebook.png"
import instaImg from "../../assets/Footer/Instagram.png"
import twitterImg from "../../assets/Footer/Twitter.png"
import youtubeImg from "../../assets/Footer/YouTube.png"
import UserContext from '../../context/UserContext'
import TVshowSkeleton from '../TVShows/TVshowSkeleton'

function HomeAfterLogin() {

  const { isHomeLoading, setIsHomeLoading } = useContext(UserContext)
  useEffect(() => {
    setTimeout(() => {
      setIsHomeLoading(false)
    }, 500)


  }, [isHomeLoading]);

  return (
    <>
      {
        isHomeLoading ? <TVshowSkeleton /> :
          <div className='min-h-screen bg-black'>
            <Navbar />



            <HeroSection />
            <div className='mx-14 mb-10 mt-4'>
              <PopularNow />
            </div>
            <div className='mx-14 mb-10'>
              <TrendingNow />
            </div>
            <div className='mx-14 mb-10'>
              <TopRatedTV />
            </div>
            <div className='mx-14 mb-10'>
              <UpcomingMovies />
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

      {/* <ToastContainer /> */}
    </>
  )
}

export default HomeAfterLogin
