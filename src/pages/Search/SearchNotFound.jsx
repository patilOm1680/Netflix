import React from 'react'
import Navbar from '../Navbar/Navbar'
import { useLocation, useNavigate } from 'react-router-dom'

function SearchNotFound() {
  const location = useLocation();
  const { input } = location.state;
  const navigate=useNavigate();
  const handleHomeClick = () => {
    navigate('/')
  }
  
  return (
    <div>
      <Navbar />
      <div className='pt-22 '>
        <div className='flex justify-center items-center w-full mt-54  '>
          <div className="grow">
            <div className="flex flex-col items-center gap-12 px-4 py-20 text-center">
              <div className="flex flex-col items-center gap-4">
                <p className="text-white text-4xl font-bold leading-tight">Nothing Found for '<span class="text-primary">{input}</span>'</p>
                <p className="text-white/80 text-sm  font-normal leading-normal max-w-lg">
                  Suggestions: Try different keywords, check for spelling errors, or try searching for a movie, TV show, or genre.
                </p>
              </div>
              <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-10 px-6 bg-primary text-white text-sm font-bold tracking-wide transition-transform hover:scale-105 bg-red-600" onClick={handleHomeClick}>
                <span className=''>Go to Home</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchNotFound
