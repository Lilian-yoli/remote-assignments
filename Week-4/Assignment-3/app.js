const express = require("express")
const mysql = require("mysql")
const bodyParser = require('body-parser'); 
const cookieParser = require('cookie-parser')

const app = express();
app.use(bodyParser.urlencoded({ extend: false})); 
app.use(express.static('public'));  //To use static file ex. CSS, Html
app.set('view engine', 'pug');  //Set up for connecting pug
app.use(cookieParser());

//Create connection
const db = mysql.createConnection({
    host    : "localhost",
    user    : "root",
    password: "yang2010",
    database: "nodemysql1"
})

//Connect
db.connect((err) => {
    if (err){
        throw err;
    }
    console.log("MySql Connected...")
})

//Create DB
app.get("/createdb", (req, res) => {
    let sql = "CREATE DATABASE nodemysql1";
    db.query(sql, (err, result) => {  //Access to database for save/fetch data, return either error or rows 
        if(err) throw err;
        console.log(result);
        res.send("Database created...");
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

//Connect to loginPage
app.get("/", (req, res) => {
    res.render("loginPage",{})
})

//Submit the Sign-in form
app.post("/", (req, res) => {
    let mUsername = req.body.inputUser;
    let mPassword = req.body.inputPass;
    let post = [mUsername, mPassword];
    let checkSql = 'SELECT email, password FROM posts WHERE email = ? AND password = ?';
    let errMsg = "";

    if(mUsername && mPassword){ //Check if user type both email and password
        db.query(checkSql, post, (err, result) => { //Check if the email matches password 
            if (result.length > 0) {
                if(err) throw err;
                console.log(result)
				res.redirect(`/trackEmail?email=${req.body.inputUser}`);
			} else {
                //email or password unmatched database, maybe wrong email, passwor, or not yet signed up
                errMsg = "Something went wrong with email or password. If not signed up yet, click the sign-up link.";
                res.render('loginPage', {errMsg});
            };
        });
    } else {
        errMsg = "Please enter your email and password";
        res.render('loginPage', {errMsg});
        res.end();
    }   
});

//Submit the Sign-up form
app.post("/signup", (req, res) => {
    let mUsername = req.body.inputUserSignUp;
    let mPassword = req.body.inputPassSignUp;
    let post = [mUsername, mPassword];
    let checkSql = 'SELECT email, password FROM posts WHERE email = ?';
    let setSql = 'INSERT INTO posts(email, password) VALUES(?, ?)';
    let errMsg = "";

    //Test if user enter email and password
    if(mUsername && mPassword){
        db.query(checkSql, post, (err, result) => { 
            if (result.length > 0) {  //Check if the email was in database
                if(err) throw err;
                errMsg = "The email is registered before...";
                res.render('loginPage', {errMsg});
			} else {
                db.query(setSql, post, (err, result) => { //If not in database, add into database
                    if(err) throw err;
                    console.log(result)
                    res.redirect(`/trackEmail?email=${req.body.inputUserSignUp}`);
                });
            };
        });
    } else {
        console.log(post)
        errMsg = "Please enter your email and password";
        res.render('loginPage', {errMsg});
        res.end();
    }   
});

//Set cookie to record user's email
app.get("/trackEmail", (req, res) => {
    let { email } = req.query;
    res.cookie('email', email)
    res.redirect("/welcome")
})

//Get /welcome page and show username
app.get("/welcome", (req, res) => {
    res.render("welcome",{username: req.cookies.email})
})


//Set the server to port 3000
app.listen ("3000", () => {
    console.log("Server started on port 3000")
});
