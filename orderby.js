var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database:"dummy"
});

con.connect(function(err){
 if(err) throw err;
 con.query("SELECT * FROM customer ORDER BY name DESC",function(err,result){
 	if(err) throw err;
 	console.log(result);
 })
})