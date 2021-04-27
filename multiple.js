var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database:"dummy"
});

var name = 'Amy';
var adr = 'Apple st 652';
var sql = 'SELECT * FROM customer WHERE name = ? AND address = ?';
con.query(sql, [name, adr], function (err, result) {
  if (err) throw err;
  console.log(result);
});