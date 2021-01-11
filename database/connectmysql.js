var mysql      = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user     : 'student',
  password : 'student',
  database : 'cows'
});

connection.connect((err) => {
  if (err) {
    console.log(err)
  } else {
    console.log('MYSQL success!!')
  }
});

module.exports = connection;
