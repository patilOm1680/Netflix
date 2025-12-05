import React from "react";
import { useInView } from "react-intersection-observer";

const LazyImage = ({ src, alt, height = 200 }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.3    
  });

  return (
    <div ref={ref} style={{ minHeight: height }}>
      {inView ? (
        <img src={src} alt={alt} style={{ width: "100%", height: "auto" }} />
      ) : (
        <div className="h-[300px] bg-[#5b5c5b]">
            
        </div>
      )}
    </div>
  );
};

export default LazyImage;
