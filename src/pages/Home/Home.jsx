import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'

import "./Home.css"
import Faq from "../../components/FAQ/Faq"
import Trending from '../../components/Trending/Trending'
import ReasonsPage from '../../components/Reasons/ReasonsPage'
import Footer from '../Footer/Footer'
import Hero from '../../components/sections/Hero/Hero'
import Membership from '../../components/sections/Membership/Membership'
import HomeAfterLogin from '../HomeAfterLogin/HomeAfterLogin'
import MoviesPage from '../TVShows/TVShowPage'
import UserContext from '../../context/UserContext'
const Home = () => {
    const {isLogin}=useContext(UserContext);

   
    return (
        <>
            {(isLogin=="true")?<HomeAfterLogin />:
            
            <div className="homeContainer min-h-screen px-30 py-5 bg-black text-white z-10 w-full">
                <Hero/>
                <div className='mt-16 mb-16'>
                    <Trending />
                </div>
                
                <ReasonsPage />
                <Faq />
                <Membership />
                <Footer />  
            </div>
            }       
        </>
    )
}

export default Home
