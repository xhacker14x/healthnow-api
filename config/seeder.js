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
  // seed data
  const sql = "INSERT INTO users (firstname,lastname,address,postcode,contact_phone_number,email,username,password) VALUES ?"
  const values = [
    ['Gregory','Munoz','245 Nickel Road','90017','626-604-7966','gregory@gmail.com','gregory','KPaL48%PS4mS'],
    ['Andrea','Holt','3564 Mcwhorter Road','39773','662-492-6667','andrea@gmail.com','andrea','p%sT3Y9k48hH'],
    ['Allan','Ward','4183 Charack Road','47243','812-313-9969','allan@gmail.com','allan','5WD#pvR75ZQe'],
    ['Earl','Whited','1632 Hedge Street','07974','908-665-9632','earl@gmail.com','earl','N@Pa3u24c@Gl'],
    ['Christine','Zimmerman','3109 Heavens Way','92805','949-256-9318','christine@gmail.com','christine','#wEB94P2&yXX']
  ]

  connection.query(sql, [values], function(err, result) {
    if(err) throw err
    console.log("Number of records inserted: " + result.affectedRows)
    process.exit();
  })

});

