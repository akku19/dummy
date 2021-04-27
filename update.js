var mysql = require('mysql');

var con = mysql.createConnection({
 host:"localhost",
 user:"root",
 password:'',
 database:'dummy'
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "UPDATE customer SET address = 'Park Lane 38' WHERE name = 'akash'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
  });
});

