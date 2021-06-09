import React from 'react';
import { movies } from '../data';

const Movies = () => {
  
  const renderMovies = () => (
    movies.map(movie => (
      <div key={movie.title}>
        <h3>{movie.title}</h3>
        <p>Duration: {movie.time} minutes</p>
        <p>Genres: {movie.genres.join(", ")}</p>
      </div>
    ))
  )
  
  return (
    <div>
        <h1>Movies Page</h1>
        {renderMovies()}
    </div>
  );
};

export default Movies;
