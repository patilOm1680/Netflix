import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import shadow from "../../assets/Home/Shadow.png";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import UserContext from "../../context/UserContext";
import { ToastContainer, toast } from "react-toastify";
import "./carsouselCard.css";
// import { minHeight } from '@mui/system';
import LazyImage from "./LazyImage";
import { useNavigate } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";
import { AddedToList, AlreadyInList } from "../../Data/messeges";
import imdb from "../../assets/Card/imdb.png";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "668px",
  minHeight: "610px",
  bgcolor: "black",
  boxShadow: 24,
  outline: "none",
  border: "2px solid #757574",
};
const CarouselCard = ({ movie, index, hoveredIndex, setHoveredIndex }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [genre, setGenre] = useState([]);

  useEffect(() => {
    const url = `${import.meta.env.VITE_Genre}?api_key=${
      import.meta.env.VITE_ApiKey
    }`;
    axios.get(url).then((response) => {
      setGenre(response.data.genres);
    });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 350);
  }, [isLoading]);

  const findGenre = (id) => {
    for (let obj of genre) {
      if (obj.id == id) return obj.name;
    }
  };
  const backdropStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setIsLoading(true);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const { setWatchListData, watchListData } = useContext(UserContext);
  const isAlreadyPresent = (movieId) => {
    for (let obj of watchListData) {
      if (movieId === obj.id) return true;
    }
    return false;
  };

  const handleWatchlist = () => {
    if (!isAlreadyPresent(movie.id)) {
      let updatedData = [...watchListData, movie];
      setWatchListData(updatedData);
      toast.success(`${AddedToList}`, { autoClose: 1500 });
    } else {
      toast.info(`${AlreadyInList}`, { autoClose: 1500 });
    }
  };
  const navigate = useNavigate();
  const handlePlay = () => {
    const movieId = movie.id;
    navigate("/play", { state: { movieId } });
  };

  let imdbRating;
  if (movie.vote_average) {
    imdbRating = movie.vote_average.toFixed(1);
  }

  return (
    <>
      <div
        key={movie.id}
        className="flex-none w-50 relative transition-transform duration-300 ease-out cursor-pointer"
        style={{
          transform: hoveredIndex === index ? "scale(1.05)" : "scale(1)",
          zIndex: hoveredIndex === index ? 10 : 1,
        }}
        onMouseEnter={() => setHoveredIndex(index)}
        onMouseLeave={() => setHoveredIndex(null)}
        onClick={handleOpen}
      >
        <LazyImage
          src={`${import.meta.env.VITE_ImageBaseUrl}${movie.poster_path}`}
          alt={movie.title || movie.original_name}
          loading="lazy"
          className="w-full h-auto object-cover rounded"
        />

        {/* {hoveredIndex === index && (
                    <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black to-transparent p-3 rounded-b">
                        <h3 className="text-white text-sm font-semibold">{movie.title || movie.original_name}</h3>
                    </div>
                )} */}
      </div>

      
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 400,
              style: backdropStyle,
            },
          }}
        >
          <Fade in={open}>
            <Box sx={style} className="pb-3">
              {/* {console.log(movie)} */}
              <div className="relative flex flex-col gap-4 bg-black text-white">
                <div className="absolute top-2 right-2  z-50 cursor-pointer">
                  <CancelRoundedIcon
                    sx={{ fontSize: 40 }}
                    onClick={() => setOpen(false)}
                  />
                </div>
                <div className="relative">
                  <LazyLoadImage
                    alt="img"
                    effect="blur"
                    wrapperProps={{
                      style: { transitionDelay: "0s" },
                    }}
                    className="w-full"
                    src={`${import.meta.env.VITE_ImageBaseUrl}${
                      movie.backdrop_path
                    }`}
                  />
                  {/* <img
                    className="w-full"
                    src={`${import.meta.env.VITE_ImageBaseUrl}${
                      movie.backdrop_path
                    }`}
                    alt=""
                  /> */}
                  <img
                    className="w-full absolute bottom-0"
                    src={shadow}
                    alt="shadow"
                  />
                </div>
                <div className="mt-[-23px] top-86 text-5xl font-bold font-serif px-8">
                  {movie.title || movie.original_name}
                </div>
                <div className="flex mx-8 gap-2 items-center">
                  {imdbRating && (
                    <>
                      <div>
                        <img
                          src={imdb}
                          alt=""
                          style={{ height: "50px", padding: "0px" }}
                        />
                      </div>
                      <span className="bg-[#414141] px-2 rounded">
                        {imdbRating}/10
                      </span>
                    </>
                  )}

                  {movie.release_date && (
                    <span className="bg-[#414141] px-2 rounded">
                      {movie.release_date.slice(0, 4)}
                    </span>
                  )}

                  {movie.genre_ids.length !== 0 &&
                    movie.genre_ids.map((id, index) => {
                      if (index >= 0 && index < 3) {
                        return (
                          <>
                            {findGenre(id) && (
                              <span
                                key={index}
                                className="bg-[#414141] px-2 rounded"
                              >
                                {findGenre(id)}
                              </span>
                            )}
                          </>
                        );
                      } else return;
                    })}
                  {movie.original_language && (
                    <span className="bg-[#414141] px-2 rounded">
                      {movie.original_language}
                    </span>
                  )}
                  <span className="bg-[#414141] px-2 rounded">U/A 16+</span>
                </div>

                {movie.overview && (
                  <div className="px-8 text-justify max-h-[50px] overflow-hidden line-clamp-2">
                    {movie.overview}
                  </div>
                )}

                <div className="ps-8 flex gap-6 items-center">
                  <button
                    className="bg-red-600 w-[157px] h-12 text-white text-[20px] cursor-pointer py-2 ps-0 pe-4  rounded"
                    onClick={handlePlay}
                  >
                    <PlayArrowIcon
                      fontSize="large"
                      sx={{ marginRight: "3px" }}
                    />
                    Play
                  </button>
                  <AddCircleOutlinedIcon
                    sx={{ fontSize: "50px", cursor: "pointer" }}
                    onClick={handleWatchlist}
                  />
                </div>
              </div>
              <ToastContainer className="toast-position" />
            </Box>
          </Fade>
        </Modal>
      
    </>
  );
};

export default CarouselCard;
