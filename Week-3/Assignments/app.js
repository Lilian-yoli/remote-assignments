const express = require('express');
const bodyParser = require('body-parser');  //Middleware setups for defining req.body(npm install body-parser --save)
const cookieParser = require('cookie-parser');  //Middleware setups for define req.cookies(npm install cookie-parser --save)

const app = express();

app.use(bodyParser.urlencoded({ extend: false}));  //
app.use(cookieParser());  //
app.use(express.static('public'));  //To use static file ex. CSS, Html
app.set('view engine', 'pug');  //Setup for connecting pug

//(Assignment 1)Create web server(http://localhost:3000/) with "Hello, My Server!"
app.get('/', (req, res) => {
  res.send(`<h1>Hello, My Server!</h1>`);
});

//(Assignment 2)Build Backend API for Front-End
app.get('/data', (req, res) => {
  const { number } = req.query;  //Set query string to variable number //number = req.query.number
  let text = ''  //The variable shows on data.pug

  let result = 0
  for(let i = 0; i <= number; i++){  //Counting the number N = 1 + 2 + 3 +...+ N
    result += i
  }

  if ( !number ){  //Show "Lack of Parameter" if no query string provided
    text = 'Lack of Parameter'
  } else {
    text =  Number.isInteger(+number)?result:'Wrong Parameter' //If text is integer, text = result; if text is not integer, text = 'Wrong Parameter'
  }

  res.render('data', { text })  //Display in data.pug with text
});


//(Assignment 3)
app.post('/sum.html', (req, res) => {
  let n = req.body.inputnumber
  let text = 0
  for(let i = 0; i <= n; i++){
    text += i
  }
  res.render('data', {text})
});


//Assignment 4: HTTP Cookie

//(Assignment Request 4-1) Serve a URL http://localhost:3000/myName by your server
app.get('/myName', (req, res) => {
  res.render('myName', { name:req.cookies.username })  //(Assignment Request 4-2) Check cookies for user’s name in the backend
});

//(Assignment Request 4-3)
app.post('/myName', (req, res) => {
  res.redirect(`/trackName?name=${req.body.username }`) //After Clicking "Submit", redirect to "/trackName?name=xxx"
});

//(Assignment Request 4-4)Get user’s name from HTTP parameter and store it in the cookies
app.get('/trackName', (req, res) => {
  const {name} = req.query
  res.cookie('username', name)
  res.redirect('/myName')
});


app.listen(3000);  //Set the server to port 3000
