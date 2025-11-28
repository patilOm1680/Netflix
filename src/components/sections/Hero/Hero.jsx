import React, { useState } from 'react'
import netflixLogo from "../../../assets/Home/logo.png"
import line from "../../../assets/Home/line.png"
import { useNavigate } from 'react-router-dom'

function Hero() {
    const navigate=useNavigate();
    const [email,setEmail]=useState("");
    const handleSignIn = () => {
      navigate('/login',{state:{getEmail:email}});
    }
    
   
    return (
        <>
            <div
                className="bannerImg absolute inset-0 bg-cover bg-center opacity-30"
            >

            </div>
            <div className="relative z-0 flex flex-col gap-32">
                <div className="flex justify-between items-center">

                    {/* <div className="text-4xl font-bold text-red-600">NETFLIX</div> */}
                    <img className='h-16' src={netflixLogo} alt="app logo" />
                    <div className=" flex">
                        <div className='border border-gray-500 mr-2 ps-2'>
                            <i class="fa-solid fa-language"></i>
                            <select
                                className="p-1 focus:outline-none mr-2 "
                                name=""
                                id=""
                            >
                                <option className="text-black" value="English">
                                    English
                                </option>
                                <option className="text-black" value="Arabic">
                                    Hindi
                                </option>

                            </select>


                        </div>
                        <button className="bg-red-600 px-5 py-1 rounded cursor-pointer" onClick={handleSignIn}>Sign In</button>
                    </div>
                </div>
                <div className=" py-30 flex flex-col items-center ">
                    <div className="homeHeading text-[3.5rem] font-black w-150 text-center leading-16">
                        Unlimited movies, shows, and more
                    </div>
                    <div className="py-5 font-bold text-[18px]">
                        Starts at 149. Cancel at any time.
                    </div>
                    <p>
                        Ready to watch? Enter your email to create or restart your
                        membership.
                    </p>
                    <div className="py-5">
                        <input
                            className="border p-2 border-gray-500 pr-30 mr-5 w-[366px] h-14"
                            type="text"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                        />
                        <button className="bg-red-600 h-14 px-5 rounded font-extrabold text-[1.3rem] cursor-pointer" onClick={handleSignIn}>
                            Get Started <i class="fa fa-angle-right" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div className="mt-16">
                <img src={line} alt="" />
            </div>
        </>
    )
}

export default Hero
