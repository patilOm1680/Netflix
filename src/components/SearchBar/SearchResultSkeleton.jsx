import React from 'react'
import { Skeleton } from '@mui/material';
import Navbar from '../../pages/Navbar/Navbar';

const SearchResultSkeleton = () => {
    return (
        <>
        <Navbar/>
        <div className='mx-20 pt-22'>
            {/* <Skeleton animation="wave" variant="rectangular" width="100%" height={80} sx={{ backgroundColor: "#5b5c5b" }} /> */}

            

            <div className='mt-3'>
                <Skeleton animation="wave" variant="text" width={200} height={60} sx={{ fontSize: '1rem', backgroundColor: "#5b5c5b" }} />
            </div>

            <div className='flex items-center gap-10 flex-wrap w-full mt-3 ps-4'>
                <Skeleton animation="wave" variant="rectangular" width="200px" height="300px" sx={{ backgroundColor: "#5b5c5b" }} />
                <Skeleton animation="wave" variant="rectangular" width="200px" height="300px" sx={{ backgroundColor: "#5b5c5b" }} />
                <Skeleton animation="wave" variant="rectangular" width="200px" height="300px" sx={{ backgroundColor: "#5b5c5b" }} />
                <Skeleton animation="wave" variant="rectangular" width="200px" height="300px" sx={{ backgroundColor: "#5b5c5b" }} />
                <Skeleton animation="wave" variant="rectangular" width="200px" height="300px" sx={{ backgroundColor: "#5b5c5b" }} />
                <Skeleton animation="wave" variant="rectangular" width="200px" height="300px" sx={{ backgroundColor: "#5b5c5b" }} />
                <Skeleton animation="wave" variant="rectangular" width="200px" height="300px" sx={{ backgroundColor: "#5b5c5b" }} />
                <Skeleton animation="wave" variant="rectangular" width="200px" height="300px" sx={{ backgroundColor: "#5b5c5b" }} />
                <Skeleton animation="wave" variant="rectangular" width="200px" height="300px" sx={{ backgroundColor: "#5b5c5b" }} />
                <Skeleton animation="wave" variant="rectangular" width="200px" height="300px" sx={{ backgroundColor: "#5b5c5b" }} />
                <Skeleton animation="wave" variant="rectangular" width="200px" height="300px" sx={{ backgroundColor: "#5b5c5b" }} />
                <Skeleton animation="wave" variant="rectangular" width="200px" height="300px" sx={{ backgroundColor: "#5b5c5b" }} />
                <Skeleton animation="wave" variant="rectangular" width="200px" height="300px" sx={{ backgroundColor: "#5b5c5b" }} />
                <Skeleton animation="wave" variant="rectangular" width="200px" height="300px" sx={{ backgroundColor: "#5b5c5b" }} />
            </div>


        </div>
        </>
    )
}

export default SearchResultSkeleton

