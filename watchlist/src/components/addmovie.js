import React, {useState} from 'react'
import { ResultCards } from './ResultCards';

export const Addmovie = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([])

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

        </div>
      </div>
    </div>
  )
}
