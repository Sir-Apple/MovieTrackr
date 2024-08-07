import React, {useState, useEffect} from 'react'
import { ResultCards } from './ResultCards';

export const Addmovie = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [latestMovies, setLatestMovies] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`)
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setLatestMovies(data.results.slice(0, 10));
        } else {
          setLatestMovies([]);
        }
      });
  }, []);

  const onChange = e =>{
    e.preventDefault();

    setQuery(e.target.value);

    fetch(`https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&query=${e.target.value}`)
    .then((res) => res.json())
    .then((data) => {
      if(!data.errors){
        setResults(data.results);
      } else{
        setResults([]);
      }
    })
  }

  return (
    <div className="add-page">
      <div className="container">
        <div className='add-content'>
          <div className='input-wrapper'>
            <input type='text' 
            placeholder='Search movie'
            value={query}
            onChange={onChange}/>
          </div>

          {results.length > 0 && (
            <ul className='results'>
              {results.map(movie =>(
                <li key={movie.id}>
                  <ResultCards movie={movie} />
                </li>
              ))}
            </ul>
          )}
          <div className='header'>
            <h1 className='heading'>Latest Released</h1>
          </div>
          {latestMovies.length > 0 && (
            <ul className='results'>
              {latestMovies.map(movie => (
                <li key={movie.id}>
                  <ResultCards movie={movie} />
                </li>
              ))}
            </ul>
          )}

        </div>
      </div>
    </div>
  )
}
