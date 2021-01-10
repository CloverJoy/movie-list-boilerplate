import React from 'react';

const MovieList = (props) => {
  if (props.isSearch) {
    return (
      <div>
      {
        props.movies.map((movie, id) => <h1 key = {movie.title + id}>{movie.title}</h1>)
      }
    </div>
    )
  } else {
    return (
      <div>
      <div>
      {
        props.filteredmovies.map((movie, id) => <h1 key = {movie.title + id}>{movie.title}</h1>)
      }
    </div>
    <button onClick = {props.handleToggleSearch}>Back to Home</button>
    </div>
    )
  }
};

export default MovieList;