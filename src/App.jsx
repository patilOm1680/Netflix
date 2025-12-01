
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './pages/Navbar/Navbar';
import { useState,lazy,Suspense } from 'react';
import PlayVideo from './pages/Play/PlayVideo';

const Home = lazy(() => import("./pages/Home/Home"));
const Login = lazy(() => import("./components/Fomrs/Login/Login"));
const TVShowPage = lazy(() => import("./pages/TVShows/TVShowPage"));
const MoviesPage = lazy(() => import("./pages/Movies/MoviesPage"));
const SearchResult = lazy(() => import("./components/SearchBar/SearchResult"));
const MyList = lazy(() => import("./components/MyList/MyList"));
const SearchNotFound = lazy(() => import("./pages/Search/SearchNotFound"));

function App() {
  
      

  return (
    <>
    <Suspense fallback={<div>Loading please wait...</div>}>
    <Routes>
      

     
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/shows' element={<TVShowPage/>}/>
      <Route path='/movies' element={<MoviesPage/>}/>
      <Route path='/search-result' element={<SearchResult/>}/>
      <Route path='/my-list' element={<MyList/>}/>
      <Route path='/search-not-found' element={<SearchNotFound/>}/>
       <Route path='/play' element={<PlayVideo/>}/>
    </Routes>
    </Suspense>
    </>
  )
}

export default App
