import React from 'react'
import posterText from "../../assets/Home/posterText.png"
import shadow from "../../assets/Home/Shadow.png"
import homeBanner from "../../assets/Home/HomeBanner.png"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';

function HeroSection() {
  return (
    <>
    <div className='flex mx-16 pt-22'>
        {/* left side  */}
        <div className='flex flex-col gap-6 justify-center ml-2 '>
            <div>
                <img className='h-[370px] w-[520px] object-cover' src={posterText} alt=""/>
            </div>
            <div className='flex items-center gap-6'>
                <button className='text-white text-2xl cursor-pointer  bg-[#D63A1F] ps-1 pe-4 py-2 rounded-3xl w-[180px]'><PlayArrowIcon fontSize='large'/> Play</button>
                <button className='text-black text-2xl cursor-pointer bg-white px-3 py-2 rounded-3xl w-[180px]'> <OndemandVideoIcon sx={{marginRight:"3px"}}/> Trailer</button>
            </div>
        </div>

        {/* right side  */}
        <div className=''>
            <div className='relative'>
                <img className='absolute top-[-70px] right-[140px] rotate-180 w-[768px]' src={shadow} alt="" />
                <img className='w-[1150px] ms-8' src={homeBanner} alt="" />
            </div>
        </div>
    </div>
    
    </>
  )
}

export default HeroSection
