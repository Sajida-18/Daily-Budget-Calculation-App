const mysql= require("mysql2");
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "budget_app"
});

connection.connect((err)=>{
    if(err){
        console.error("Error connecting to Mysql:", err);
        returns;

    }
    console.log("Connected to MySQL !")
});

module.exports= connection;