
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Login from './components/Fomrs/Login/Login'
import Navbar from './pages/Navbar/Navbar';
import { useState } from 'react';
import TVShowPage from './pages/TVShows/TVShowPage';
import MoviesPage from './pages/Movies/MoviesPage';
import SearchResult from './components/SearchBar/SearchResult';
import MyList from './components/MyList/MyList';

function App() {
  
      

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/shows' element={<TVShowPage/>}/>
      <Route path='/movies' element={<MoviesPage/>}/>
      <Route path='/search-result' element={<SearchResult/>}/>
      <Route path='/my-list' element={<MyList/>}/>

    </Routes>
    </>
  )
}

export default App
