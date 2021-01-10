import React from 'react';
import SearchBar from './SearchBar.jsx';
import MovieList from './MovieList.jsx';
import AddMovie from './AddMovie.jsx';

let movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Deus ex machina'}
];

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {movies,
      title: '',
      addtitle:'',
      filteredmovies:[],
      isSearch: true
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleToggleSearch = this.handleToggleSearch.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  };

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  };

  handleToggleSearch() {
    this.setState(state => ({
      isSearch: !state.isSearch
    }));
  }

  handleSearch(event) {
    let query = this.state.title;
    let movies = [...this.state.movies];
    let lowercased = movies.map(movie => {
      let obj = {};
      obj.title = movie.title.toLowerCase();
      return obj;
    });
    let filteredmovies = lowercased.filter(movie => movie.title.includes(query));
    if (filteredmovies.length === 0 || !query) {
      alert('Invalid query search/ cannot find movie')
      return;
    }
    this.setState({filteredmovies: filteredmovies});
    this.handleToggleSearch();
    event.preventDefault();
  }

  handleAdd(event) {
    let movies = [...this.state.movies];
    let query = this.state.addtitle;
    console.log(query)
    movies = [...movies, {title: query}];
    console.log(movies);
    this.setState({movies: movies});
    event.preventDefault();
  }

  render() {
    let movies = this.state.movies;
    return (
      <div>
        <AddMovie handleAdd={this.handleAdd} handleChange={this.handleChange} addtitle = {this.state.addtitle}/>
        <SearchBar handleSearch = {this.handleSearch} handleChange = {this.handleChange} title = {this.state.title}/>
        <MovieList movies = {this.state.movies} isSearch = {this.state.isSearch} filteredmovies = {this.state.filteredmovies} handleToggleSearch = {this.handleToggleSearch}/>
      </div>
    )
  }
}
// const App = (props) => (
//   <div>
//     <SearchBar />
//   <div>
//     {Movies.map((movie, id) => <h1 key = {movie.title + id}>{movie.title}</h1>)}
//   </div>
//   </div>
// );

export default App;