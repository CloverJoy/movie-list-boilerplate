import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movie: {'title': ''}
    }
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnChange(event) {
    this.setState({movie: {'title': event.target.value}})
  }

  handleOnSubmit(event) {
    this.props.addMovie(this.state.movie);
    event.preventDefault();
    this.setState({movie:{'title': '' }});
  }

  render() {
    return (
      <form onSubmit={this.handleOnSubmit} className = 'add-movie'>
        <input type="text" value={this.state.movie.title} onChange={this.handleOnChange}></input>
        <button>Add Movie!</button>
      </form>
    );
  };
};

export default AddMovie;

