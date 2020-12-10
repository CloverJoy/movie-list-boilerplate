import React from 'react';
import SearchBar from './SearchBar.jsx';
import MovieList from './MovieList.jsx';

let movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies:  movies
    }

  }

  render() {
    return (
      <div>
      <SearchBar />
      <MovieList movies={movies}  />
      </div>
    )
  }

}


// const App = (props) => (
//   movies.map((movie, idx) =>
//   <div key={movie.title + idx} className= 'movie-list'>{movie.title}</div>
//   )
// );

export default App;