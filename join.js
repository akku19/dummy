var mysql = require('mysql');

var con = mysql.createConnection({
 host:"localhost",
 user:"root",
 password:'',
 database:'dummy'
});


con.connect(function(err) {
  if (err) throw err;
 var sql = "SELECT user.address AS user, customer.name AS name FROM user JOIN customer ON user.name = customer.name";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});