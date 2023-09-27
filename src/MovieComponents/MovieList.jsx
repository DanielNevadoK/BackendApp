import React from 'react'
import Movie from './Movie'

const MovieList = (props) => {
  return (
    <div>
      {props.movies.Response === "True" ? (
        <ul>
          {props.movies.Search.map((movie) => (
            <li key={movie.imdbID} className="movieListItem">
              <Movie movie={movie} />
            </li>
          ))}
        </ul>
      ) : (
        <p>{props.movies.Error}</p>
      )}
    </div>
  )
}

export default MovieList