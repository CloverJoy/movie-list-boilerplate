const express = require('express');
const app = express();
const PORT = 3000 || process.env.PORT;

app.use(express.static('public'));
app.use(express.json());

app.get('/api', (req,res) => {
  res.send('hello world');
})

app.get('/api/movies', (req,res) => {
  let movies = [
    {title: 'Mean Girlsasdd'},
    {title: 'Hackers;jksdf'},
    {title: 'The Greyejdjd'},
    {title: 'Sunshineeee'},
    {title: 'Ex Makimak'},
  ];
  res.send(movies);
})

app.listen(PORT, () => {
  console.log(`Server listening on port: http://localhost:${PORT}`);
})