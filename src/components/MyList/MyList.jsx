import React, { useContext } from 'react'
import Navbar from '../../pages/Navbar/Navbar'
import SearchCard from '../SearchBar/SearchCard';
import UserContext from '../../context/UserContext';
import emptyList from "../../assets/watchlist/emptyList.png"
import { useNavigate } from 'react-router-dom';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';

function MyList() {
    const { watchListData } = useContext(UserContext)
    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate('/')
    }

    return (
        <>
            <Navbar />
            {
                (watchListData.length == 0) ?
                    <div className='pt-22 '>
                        <div className='flex justify-center items-center w-full mt-70  '>
                            <div className="flex flex-1 grow items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
                                <div className="flex max-w-lg flex-col items-center justify-center text-center">

                                    <div className="flex flex-col items-center gap-6">

                                        <div className="flex flex-col items-center gap-2">
                                            <h2 className="text-4xl font-bold tracking-tight text-white">Your Watchlist is Empty</h2>
                                            <p className="max-w-md text-sm text-neutral-400">Add shows and movies to your list to easily find them later. Just look for the plus icon on any title!</p>
                                        </div>
                                        <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-10 px-6 bg-primary text-white text-sm font-bold tracking-wide transition-transform hover:scale-105 bg-red-600" onClick={handleHomeClick}>
                                            <span className=''>Find Something to Watch</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    :
                    <>
                        <p className='text-2xl text-white pt-28 px-22 mb-5 font-bold'>Your Watchlist</p>
                        <div className='text-white flex items-center gap-10 flex-wrap px-22 w-full '>

                            {
                                watchListData.map((obj, index) => {
                                    if (obj.poster_path !== null && obj.backdrop_path !== null)
                                        return <div>
                                            {/* {console.log(obj)} */}
                                            <div>
                                                {/* <div className='absolute top-[20px] right-[20px] bg-white'>
                                                    <CancelRoundedIcon fontSize='large'/>
                                                </div> */}
                                                <SearchCard movie={obj} index={index} />
                                            </div>

                                        </div>
                                })
                            }
                        </div>
                    </>
            }


        </>
    )
}

export default MyList
