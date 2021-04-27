var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database:"dummy"
});


con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
 // var sql = "INSERT INTO customer (name, address) VALUES ('Michelle', 'Blue Village 1')";
  con.query("SELECT * FROM customer",function(err,result,fileds){
   if (err) throw err;
   console.log(result);
  });
});