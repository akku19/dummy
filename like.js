var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database:"dummy"
});

// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT * FROM customer WHERE address LIKE 'S%'", function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });

con.connect(function(err){
	if (err) throw err;
	con.query("SELECT * FROM customer address WHERE address LIKE 'S%'",function(err,result){
    if(err) throw err;
    console.log(result);
	})
})