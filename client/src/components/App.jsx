import React from 'react';
import SearchBar from './SearchBar.jsx';
import MovieList from './MovieList.jsx';
import AddMovie from './AddMovie.jsx';
import ToggleWatched from './ToggleWatched.jsx';

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
      movies,
    }
    this.sortMovie = this.sortMovie.bind(this);
    this.refreshMovies = this.refreshMovies.bind(this);
    this.addMovie = this.addMovie.bind(this);

  }

  sortMovie(query) {
   const lowerCased = query.toLowerCase();
   const wordsIsThere = this.state.movies.some(movie => movie.title.toLowerCase().includes(lowerCased));
   if (wordsIsThere) {
    const newmovies = this.state.movies.filter(movie => movie.title.toLowerCase().includes(lowerCased));
    this.setState({movies: newmovies});
   }
   else {
    console.log('No result match with your query sir, Try again next time!')
    this.setState({movies});
   }
  }

  refreshMovies() {
    this.setState({movies});
  }

  addMovie(addedMovie) {
    const movies = [...this.state.movies];
    movies.push(addedMovie);
    this.setState({movies});
  }

  render() {
    return (
      <div>
        <AddMovie addMovie={this.addMovie}/>
        <SearchBar sortMovie={this.sortMovie} refreshMovies={this.refreshMovies} />
        <ToggleWatched />
        <MovieList movies={this.state.movies}/>
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