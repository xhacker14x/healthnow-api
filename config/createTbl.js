const mysql = require('mysql');
require('dotenv').config()

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DBNAME
});
 
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  // create table
  const sql = "CREATE TABLE users (id INT(11) NOT NULL AUTO_INCREMENT,firstname VARCHAR(255) NOT NULL, lastname VARCHAR(255) NOT NULL,address VARCHAR(255) NOT NULL,postcode VARCHAR(50) NOT NULL,contact_phone_number VARCHAR(255) NOT NULL,email VARCHAR(255) NOT NULL,username VARCHAR(255) NOT NULL, password VARCHAR(255) NOT NULL, PRIMARY KEY (id))";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
    process.exit();
  });

});


