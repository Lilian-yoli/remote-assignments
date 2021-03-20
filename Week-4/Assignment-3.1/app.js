const express = require("express");
const mysql = require("mysql");

const app = express();

//Create connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "yang2010",
    database: "nodemysql2"
});

//Connect
db.connect( (err) => {
    if(err){
        throw err;
    }
    console.log("mysql connected")
})

//Create database
app.get('/createdb', (req, res) => {
    let sql = "CREATE DATABASE nodemysql2"
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result)
        res.send("database created")
    })
})

//Create Table
app.get("/createpoststable", (req, res) => {
    let sql = 'CREATE TABLE posts(id int AUTO_INCREMENT, email VARCHAR(255), password VARCHAR(255), PRIMARY KEY(id))';
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send("Post table created...");
    });
});

//Add data into table
app.get("/adddata", (req, res) => {
    let post = {email: "google@gmail.com", password: "1234"}
    let sql = "INSERT INTO posts SET ?"
    db.query(sql, post, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send("Post table created...");
    });
});

app.listen('3000', () => {
    console.log("Server is set up");
});