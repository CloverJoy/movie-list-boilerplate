import React from 'react';

const SearchBar = (props) => (
  <form onSubmit = {props.handleSearch}>
    <input type="text" value={props.title} name="title" onChange = {props.handleChange}></input>
    <button>SEARCH</button>
  </form>
);

export default SearchBar;