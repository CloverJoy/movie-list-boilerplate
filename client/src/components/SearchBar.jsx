import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleResetButton = this.handleResetButton.bind(this);

  }

  handleChange(event) {
    this.setState({query: event.target.value});
  }

  handleSubmit(event) {
    this.props.sortMovie(this.state.query);
    event.preventDefault();
    this.setState({query: ''});

  }

  handleResetButton() {
    this.props.refreshMovies();
  }

  render() {
    return (
      <span>
      <form className="search" onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.query} onChange={this.handleChange}></input>
        <button className='search-button'>Search</button>
        <label className="reset-button" onClick={this.handleResetButton}>Refresh</label>
      </form>
      </span>
    );
  };
};

export default SearchBar;