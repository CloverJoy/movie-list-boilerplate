import React from 'react';



const MovieList = (props) => {
  if (props.isSearch && props.isWatched === false) {
    return (
      <div>
      {
        props.movies.map((movie, id) => <h1 key = {`${id}n`}>{movie.title}<button onClick={() => props.handleNotToWatched(id)}>watch</button></h1>)
      }
    </div>
    )
  } else if (props.isSearch && props.isWatched === true) {
    return (
      <div>
      {
        props.watchedmovies.map((movie, id) => <h1 key = {`${id} w`}>{movie.title}<button onClick={() => props.handleWatchedToNot(id)}>watch</button></h1>)
      }
    </div>
    )
  } else {
    return (
      <div>
      <div>
      {
        props.filteredmovies.map((movie, id) => <h1 key = {movie.title + id + 'f'}>{movie.title}</h1>)
      }
    </div>
    <button onClick = {props.handleToggleSearch}>Back to Home</button>
    </div>
    )
  }
};

export default MovieList;