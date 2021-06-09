import React from 'react';
import { directors } from '../data';

const Directors = () => {

  const renderDirectors = () => (
    directors.map(director => (
      <div key={director.name}>
        <h3>{director.name}</h3>
        <p>Movies: {director.movies.join(", ")}</p>
      </div>
    ))
  )
  return (
    <div>
      <h1>Directors Page</h1>
      {renderDirectors()}
      {console.log(directors)}
    </div>
  );
}

export default Directors
