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
      movies
    }
    this.sortMovie = this.sortMovie.bind(this);
    this.resetMovies = this.resetMovies.bind(this);

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

  resetMovies() {
    this.setState({movies});
  }

  render() {
    return (
      <div>
      <SearchBar sortMovie={this.sortMovie} resetMovies={this.resetMovies} />
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