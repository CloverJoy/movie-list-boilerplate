import React from 'react';
import SearchBar from './SearchBar.jsx';
import MovieList from './MovieList.jsx';
import AddMovie from './AddMovie.jsx';
import Axios from 'axios';

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
    this.state = {
      movies,
      title: '',
      addtitle:'',
      filteredmovies:[],
      isSearch: true,
      firstTime: true,
      watchedmovies:'',
      toggleWatchedButton: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleToggleSearch = this.handleToggleSearch.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleAddFirstTime = this.handleAddFirstTime.bind(this);
    this.handleNotToWatched = this.handleNotToWatched.bind(this);
    this.handleWatchedToNot = this.handleWatchedToNot.bind(this);
    this.handleNotWatchedButton = this.handleNotWatchedButton.bind(this);
    this.handleWatchedButton = this.handleWatchedButton.bind(this);
    this.fetchData = this.fetchData.bind(this);
  };

  fetchData() {
    Axios.get('/api/movies')
      .then((res) => {
        console.log(res.data);
        this.setState({movies: res.data});
      })
      .catch(() => console.log('Cannot fetch the data'))
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  };

  handleToggleSearch() {
    this.setState(state => ({
      isSearch: !state.isSearch
    }));
  }

  handleWatchedButton() {
    this.setState({toggleWatchedButton: true});
    console.log(this.state.toggleWatchedButton);
  };

  handleNotWatchedButton() {
    this.setState({toggleWatchedButton: false});
    console.log(this.state.toggleWatchedButton);
  }

  handleNotToWatched(idx) {
    let movies = [...this.state.movies];
    let watchedmovies = [...this.state.watchedmovies];
    watchedmovies.push(movies.splice(1,1)[0]);
    this.setState({movies: movies });
    this.setState({watchedmovies: watchedmovies});
    console.log(this.state.watchedmovies);
  }

  handleWatchedToNot(idx) {
    let watchedmovies = [...this.state.watchedmovies];
    let movies = [...this.state.movies];
    movies = [...movies, watchedmovies.splice(idx,1)[0]];
    this.setState({watchedmovies: watchedmovies});
    this.setState({movies: movies});
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

  handleAddFirstTime(event) {
    let movies = [];
    let query = this.state.addtitle;
    movies = [...movies, {title: query}];
    this.setState({movies: movies});
    this.setState({firstTime: false});
    event.preventDefault();
  }

  handleAdd(event) {
    let movies = [...this.state.movies];
    let query = this.state.addtitle;
    movies = [...movies, {title: query}];
    this.setState({movies: movies});
    event.preventDefault();
  }
  componentDidMount() {
    this.fetchData();
    console.log('success!');
  }

  render() {
    let movies = this.state.movies;
    return (
      <div>
        <AddMovie handleAddFirstTime = {this.handleAddFirstTime} handleAdd={this.state.firstTime ? this.handleAddFirstTime : this.handleAdd} handleChange={this.handleChange} addtitle = {this.state.addtitle} />
        <SearchBar handleSearch = {this.handleSearch} handleChange = {this.handleChange} title = {this.state.title}/>
        <button onClick={this.handleNotWatchedButton}>NOT WATCHED</button><button onClick={this.handleWatchedButton}>WATCHED</button>
        <MovieList isWatched = {this.state.toggleWatchedButton} handleWatchedToNot = {this.handleWatchedToNot}handleNotToWatched = {this.handleNotToWatched} movies = {this.state.movies} isSearch = {this.state.isSearch} filteredmovies = {this.state.filteredmovies} watchedmovies = {this.state.watchedmovies} handleToggleSearch = {this.handleToggleSearch}/>
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