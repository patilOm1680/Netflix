import React, { useEffect, useState, useRef } from 'react'
import bgImg from "../../assets/Home/backgroundBanner.jpg"
import axios from 'axios'
import "./trending.css"
import NumberCard from '../Cards/NumberCard'
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Trending = () => {

  const [trendingMovies, setTrendingMovies] = useState([]);


  useEffect(() => {
    const fetchTrendingMovies = () => {
      const url = `${import.meta.env.VITE_TrendingMovies}?api_key=${import.meta.env.VITE_ApiKey}`
      axios.get(url)
        .then((response) => {
          // console.log(response.results)
          setTrendingMovies(response.data.results)
        }
        )
    }
    fetchTrendingMovies();
  }, []);

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    const container = carouselRef.current;
    const scrollAmount = container.offsetWidth * 0.9;

    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      setScrollPosition(carouselRef.current.scrollLeft);
    }
  };

  const showLeftButton = scrollPosition > 0;
  const showRightButton = carouselRef.current &&
    scrollPosition < (carouselRef.current.scrollWidth - carouselRef.current.offsetWidth - 10);

  return (
    <>
      {/* <div>
                <div className="font-bold text-2xl text-white">Trending now</div>
                <div className="flex gap-10 overflow-x-scroll">
                    {trendingMovies.map((movie, index) => {
                        if (index >= 0 && index < 10) {
                            return (

                                <NumberCard movie={movie} index={index} />
                            );
                        } else return;

                    })}
                </div>
            </div> */}

      <div className=" bg-black px-5">
        <div className="m mx-auto">
          <h2 className="text-white text-2xl font-semibold mb-2">Trending Now</h2>

          <div className="relative group">

            {showLeftButton && (
              <button
                onClick={() => scroll('left')}
                className="absolute cursor-pointer left-0 top-0 bottom-0 z-10 w-12 bg-black bg-opacity-50 hover:bg-opacity-75 transition-all opacity-0 group-hover:opacity-100 flex items-center justify-center"
              >
                <ChevronLeft className="w-10 h-10 text-white" />
              </button>
            )}

            <div
              ref={carouselRef}
              onScroll={handleScroll}
              className="flex gap-2 overflow-x-scroll overflow-y-hidden scrollbar-hide scroll-smooth"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {trendingMovies.map((movie, index) => {
                if (index >= 0 && index < 10) {
                  return <div
                    key={movie.id}
                    className="flex-none w-[218px] relative transition-transform duration-300 ease-out cursor-pointer"
                    style={{
                      transform: hoveredIndex === index ? 'scale(1.05)' : 'scale(1)',
                      zIndex: hoveredIndex === index ? 10 : 1,
                    }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >


                    <NumberCard movie={movie} index={index} />

                  </div>
                } else return;

              }
              )}
            </div>

            {showRightButton && (
              <button
                onClick={() => scroll('right')}
                className="absolute cursor-pointer right-0 top-0 bottom-0 z-10 w-12 bg-black bg-opacity-50 hover:bg-opacity-75 transition-all opacity-0 group-hover:opacity-100 flex items-center justify-center"
              >
                <ChevronRight className="w-10 h-10 text-white" />
              </button>
            )}

          </div>


        </div>


      </div>



    </>
  )
}

export default Trending
