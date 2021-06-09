import React from 'react';
import { actors } from '../data';

const Actors = () => {

  const renderActors = () => (
    actors.map(actor => (
      <div key={actor.name}>
        <h3>{actor.name}</h3>
        <p>Movies: {actor.movies.join(", ")}</p>
      </div>
    ))
  )

  return (
    <div>
      <h1>Actors Page</h1>
      {renderActors()}
    </div>
  );
};

export default Actors;
