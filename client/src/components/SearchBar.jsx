import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ''
    };

  }
  render() {
    return (
      <form>
        <input type="text" value=""></input>
        <button>Submit</button>
      </form>
    );
  };
};

export default SearchBar;