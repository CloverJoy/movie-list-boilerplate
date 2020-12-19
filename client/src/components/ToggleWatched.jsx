import React from 'react';

class ToggleWatched extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isWatched: true
    };

    this.handleWatched = this.handleWatched.bind(this);
    this.handleToWatch = this.handleToWatch.bind(this);

  }

  handleWatched(event) {
    this.setState({isWatched: true});
    console.log(this.state);
  }

  handleToWatch(event) {
    this.setState({isWatched: false});
    console.log(this.state);
  }


  render() {
    return (
      <span>
        <button onClick={this.handleWatched}>Watched</button>
        <button onClick={this.handleToWatch}>To Watch</button>
      </span>
    );
  };
};

export default ToggleWatched;