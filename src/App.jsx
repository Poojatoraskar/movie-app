/* eslint-disable no-unused-vars */
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './page/Home/home';
import MovieList from './components/movieList/movieList';
import MovieDetails from './page/movieDetails/movieDetails';

function App() {

  return (
    <>
      <div className='App'>
        <Router>
          <Header />
          <Routes>
            <Route index element={<Home />} />
            <Route path='movie/:id' element={<MovieDetails />} />
            <Route path='movies/:type' element={<MovieList />} />
            <Route path='/*' element={<h1>error page</h1>} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
