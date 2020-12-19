import React from 'react';
//Change it into class component
//onClick, somehow must have a function to return index

const MovieList = (props) => (
  props.movies.map((movie, idx) =>
  <div key={movie.title + idx} className= 'movie-list'>{movie.title}<button>Watch</button></div>
  )
);

export default MovieList;
