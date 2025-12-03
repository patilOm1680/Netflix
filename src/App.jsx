
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './pages/Navbar/Navbar';
import { useState, lazy, Suspense } from 'react';
import PlayVideo from './pages/Play/PlayVideo';
import SearchResultSkeleton from './components/SearchBar/SearchResultSkeleton';
import Profile from './pages/Profile/Profile';
import Subscription from './pages/Subscription/Subscription';

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
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/shows' element={<TVShowPage />} />
          <Route path='/movies' element={<MoviesPage />} />
          <Route path='/search-result' element={<SearchResult />} />
          <Route path='/my-list' element={<MyList />} />
          <Route path='/search-not-found' element={<SearchNotFound />} />
          <Route path='/play' element={<PlayVideo />} />
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/subscription' element={<Subscription/>}/>
        </Routes>
      </Suspense>
    </>
  )
}

export default App
