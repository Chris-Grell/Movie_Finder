import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';
import { useEffect, useState } from 'react';

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=beb84e4e';

const App = () => {

      const [movies, setMovies] = useState([]);
      const [searchTerm, setSearchTerm] = useState([]);

      const searchMovies = async (title) => {

        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        console.log(data);
        setMovies(data.Search);
      }

      useEffect(() => {

        searchMovies('Interstellar');

      }, []);

  return (
    <div className='app'>
    <h1>Movie Search</h1>

      <div className='search'>
      <input placeholder='Search for Movies' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
      <img src={SearchIcon} alt="search" onClick={() => searchMovies(searchTerm)}/>
      </div>

      {
        movies?.length > 0 ? (

          <div className='container'>
          {
            movies.map((movie) => (<MovieCard movie={movie} />))
          }
          </div>
        ) : (
          <div classname="empty">
          <h2>No movies found</h2>  
          </div>
        )
      }

    </div>

  );
}

export default App;
