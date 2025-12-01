import React from 'react';
import { Box, Skeleton, Stack, Grid, Container } from '@mui/material';

const TVshowSkeleton = () => {
  

  return (
    <>
    <div className='mx-20 mt-3'>
      <Skeleton animation="wave" variant="rectangular" width="100%" height={80} sx={{backgroundColor:"#5b5c5b"}}/>

      <div className='mt-3'>
        <Skeleton animation="wave" variant="rectangular" width="100%" height={600} sx={{backgroundColor:"#5b5c5b"}}/>
      </div>
      <div>
        <Skeleton animation="wave" variant="text" width={300} height={60} sx={{ fontSize: '1rem',backgroundColor:"#5b5c5b" }} />
      </div>
      <div className='flex gap-2'>
        <Skeleton animation="wave" variant="rectangular" width="300px" height="150px" sx={{backgroundColor:"#5b5c5b"}}/>
        <Skeleton animation="wave" variant="rectangular" width="300px" height="150px" sx={{backgroundColor:"#5b5c5b"}}/>
        <Skeleton animation="wave" variant="rectangular" width="300px" height="150px" sx={{backgroundColor:"#5b5c5b"}}/>
        <Skeleton animation="wave" variant="rectangular" width="300px" height="150px" sx={{backgroundColor:"#5b5c5b"}}/>
        <Skeleton animation="wave" variant="rectangular" width="300px" height="150px" sx={{backgroundColor:"#5b5c5b"}}/>
        <Skeleton animation="wave" variant="rectangular" width="300px" height="150px" sx={{backgroundColor:"#5b5c5b"}}/>
      </div>
    </div>
    </>
  );
};

export default TVshowSkeleton;
