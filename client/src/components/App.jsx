import React from 'react';
var movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];
const App = (props) => (
  movies.map((movie, idx) =>
  <div key={movie.title + idx} className= 'movie-list'>{movie.title}</div>
  )
);

export default App;