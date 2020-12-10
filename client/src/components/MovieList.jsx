import React from 'react';

const MovieList = (props) => (
  props.movies.map((movie, idx) =>
  <div key={movie.title + idx} className= 'movie-list'>{movie.title}</div>
  )
);

export default MovieList;
