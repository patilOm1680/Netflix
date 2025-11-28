import React, { useState, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react';

import CarouselCard from './CarouselCard';



function Carousel({ topicName, movies }) {

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
    <div className=" bg-black px-5">
      <div className="m mx-auto">
        <h2 className="text-white text-2xl font-semibold mb-6">{topicName}</h2>

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
            className="flex overflow-x-scroll overflow-y-hidden gap-4 scrollbar-hide scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {movies.map((movie, index) => (
              <CarouselCard movie={movie} index={index} hoveredIndex={hoveredIndex} setHoveredIndex={setHoveredIndex} />

            ))}
          </div>

          {/* Right Arrow */}
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

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      
    </div>
  )
}

export default Carousel
