var mysql = require('mysql');
var con =mysql.createConnection({
	host:'localhost',
	user:"root",
	password:'',
	database:'dummy'
})

con.connect(function(err) {
  if (err) throw err;
  var sql = "DELETE FROM customer WHERE name = 'Michael'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Number of records deleted: " + result.affectedRows);
  });
});