import React from 'react';

const AddMovie = (props) => (
  <form onSubmit = {props.handleAdd}>
    <input type="text" value={props.addtitle} name="addtitle" onChange = {props.handleChange}></input>
    <button>Add Movie</button>
  </form>
)

export default AddMovie;