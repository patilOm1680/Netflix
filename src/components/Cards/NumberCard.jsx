// import React from 'react'
import * as React from 'react';
import { useState, useEffect } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { useNavigate } from 'react-router-dom';
import shadow from "../../assets/Home/Shadow.png"
import axios from 'axios';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import Skeleton from '@mui/material/Skeleton';
import imdb from "../../assets/Card/imdb.png"

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "668px",
   minHeight: "610px",
    bgcolor: 'black',
    boxShadow: 24,
    outline: "none",
    border: "2px solid #757574"

};
function NumberCard({ movie, index }) {

    const [isLoading, setIsLoading] = useState(true);
    const [genre, setGenre] = useState([]);
    useEffect(() => {
        const url = `${import.meta.env.VITE_Genre}?api_key=${import.meta.env.VITE_ApiKey}`
        axios.get(url)
            .then((response) => {
                setGenre(response.data.genres);
            })
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1500)

    }, [isLoading]);

    const navigate = useNavigate();
    const handleSignIn = () => {
        navigate('/login', { state: { getEmail: "" } });
    }
    const findGenre = (id) => {
        for (let obj of genre) {
            if (obj.id == id) return obj.name;
        }
    }
    const backdropStyle = {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
    };
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setIsLoading(true);
        setOpen(true)
    };
    const handleClose = () => setOpen(false);

    let imdbRating;
    if (movie.vote_average) {
        imdbRating = (movie.vote_average.toFixed(1));
    }
    return (
        <>
            <div key={index} className="pt-5 relative cursor-pointer" onClick={handleOpen}>
                <img className="rounded-2xl min-w-[180px] h-[255px]"
                    src={`${import.meta.env.VITE_ImageBaseUrl}${movie.poster_path}`} alt="" />


                <div className="indexing text-8xl font-bold absolute bottom-2 left-[-20px] text-stroke-white text-black z-50">
                    {index + 1}
                </div>
            </div>

            {
                (isLoading) ?
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
                            <Box sx={style} className='pb-3'>
                                {/* {console.log(movie)} */}
                                <div className='relative flex flex-col gap-4 bg-black text-white'>

                                    <div className='relative'>
                                        <Skeleton animation="wave" variant="rectangular" width="100%" height="350px" sx={{ backgroundColor: "#5b5c5b" }} />

                                    </div>
                                    <div className='mt-[-23px] top-86 text-5xl font-bold font-serif px-8'>
                                        <Skeleton animation="wave" variant="text" width="350px" height={80} sx={{ backgroundColor: "#5b5c5b" }} />
                                    </div>
                                    <div className='mt-[-20px] flex mx-8 gap-2 mt-0 pt-0'>
                                        <Skeleton animation="wave" variant="text" width="70px" height={40} sx={{ backgroundColor: "#5b5c5b" }} />
                                        <Skeleton animation="wave" variant="text" width="80px" height={40} sx={{ backgroundColor: "#5b5c5b" }} />
                                        <Skeleton animation="wave" variant="text" width="80px" height={40} sx={{ backgroundColor: "#5b5c5b" }} />
                                        <Skeleton animation="wave" variant="text" width="80px" height={40} sx={{ backgroundColor: "#5b5c5b" }} />
                                        <Skeleton animation="wave" variant="text" width="80px" height={40} sx={{ backgroundColor: "#5b5c5b" }} />

                                    </div>
                                    <div className='mx-8'>
                                        <Skeleton animation="wave" variant="rectangular" width="100%" height="50px" sx={{ backgroundColor: "#5b5c5b" }} />
                                    </div>



                                    <div className='ps-8 flex gap-6 items-center'>
                                        <Skeleton animation="wave" variant="rectangular" width="150px" height="50px" sx={{ backgroundColor: "#5b5c5b" }} />
                                        <Skeleton animation="wave" variant="circular" width={50} height={50} sx={{ backgroundColor: "#5b5c5b" }} />
                                    </div>

                                </div>
                                {/* <ToastContainer className="toast-position" /> */}
                            </Box>

                        </Fade>


                    </Modal>
                    :


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
                            <Box sx={style} className='pb-3'>
                                <div className='relative flex flex-col gap-4 bg-black text-white'>
                                    <div className='absolute top-2 right-2  z-50 cursor-pointer'>
                                        <CancelRoundedIcon sx={{ fontSize: 40 }} onClick={() => setOpen(false)} />
                                    </div>
                                    <div className='relative'>
                                        <img className='w-full' src={`${import.meta.env.VITE_ImageBaseUrl}${movie.backdrop_path}`} alt="" />
                                        <img className='w-full absolute bottom-0' src={shadow} alt="shadow" />

                                    </div>
                                    <div className='mt-[-23px] top-86 text-5xl font-bold font-serif ps-8'>
                                        {movie.title.toUpperCase()}
                                    </div>
                                    <div className='flex ms-8 gap-2 items-center'>
                                        {
                                            (imdbRating) && (
                                                <>
                                                    <div >
                                                        <img src={imdb} alt="" style={{ height: "50px", padding: "0px" }} />
                                                    </div>
                                                    <span className='bg-[#414141] px-2 rounded'>
                                                        {imdbRating}/10
                                                    </span>
                                                </>
                                            )
                                        }
                                        {
                                            (movie.release_date) &&
                                            <span className='bg-[#414141] px-2 rounded'>
                                                {movie.release_date.slice(0, 4)}
                                            </span>
                                        }
                                        {

                                            movie.genre_ids.map((id, index) => {

                                                if (index >= 0 && index < 3) {
                                                    return <>{findGenre(id) && <span key={index} className='bg-[#414141] px-2 rounded'>
                                                        {findGenre(id)}

                                                    </span>
                                                    }
                                                    </>

                                                } else return;
                                            })
                                        }
                                        {(movie.original_language) &&
                                            <span className='bg-[#414141] px-2 rounded'>
                                                {movie.original_language}
                                            </span>
                                        }

                                        <span className='bg-[#414141] px-2 rounded'>
                                            U/A 16+
                                        </span>
                                    </div>
                                    <div className='px-8 text-justify max-h-[50px] overflow-hidden'>
                                        {movie.overview}
                                    </div>
                                    <div className='ps-8'>
                                        <button className="bg-red-600 w-[157px] h-12 text-white text-[20px] cursor-pointer py-2  rounded" onClick={handleSignIn}>Get Started
                                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                                        </button>
                                    </div>
                                </div>
                            </Box>
                        </Fade>
                    </Modal>
            }
        </>
    )
}

export default NumberCard