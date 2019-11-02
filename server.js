const express = require("express");
const path = require("path");
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3001;
const session = require('express-session');
const morgan = require('morgan')
const app = express();
const dbConnection = require('./database');
// const passport = require('./passport');
require('dotenv').config();
// Route requires
const user = require('./routes/user');

// MIDDLEWARE
app.use(morgan('dev'))
app.use(
	bodyParser.urlencoded({
		extended: false
	})
)
app.use(bodyParser.json());

// Contentful
const contentful = require("contentful");

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE,
  accessToken: process.env.CONTENTFUL_ACCESSTOKEN
  // ,
  // host: "preview.contentful.com"
});

// AUTHENTICATION

// app.use( (req, res, next) => {
//   console.log('req.session', req.session);
//   return next();
// });

// app.use(
//   session({
//   secret: 'send-ze-codes',
//   resave: false, 
//   saveUninitialized: false
//   })
// );

// // Authentication route
// // app.use('/user', user)

// // TEST ROUTE - REMOVE LATE
app.post('/user', (req, res) => {
  console.log(req.body.username);
  req.session.username = req.body.username;
  res.end()
})



// Get ALL ENTRIES from Contentful
app.get("/api/articles", (req, res) => {
  client.getEntries()
    .then(response => {
      res.json(response);
    })
    .catch((error) => {
      res.send("error", error);
    })
});

// Get ONLY blog posts from Contentful - Works! 
app.get("/api/blogs", (req, res) => {
  client.getEntries({
    'content_type': 'blogPost'
  })
    .then(response => {
      res.json(response);
    })
    .catch((error) => {
      res.send("error", error);
    })
})

// Get ONE entry from Contentful 
app.get("/api/blogs/:id", (req, res) => {
  client.getEntry(req.params.id)
    .then(entry => {
      res.json(entry);
    })
    .catch((error) => {
      res.send("error", error);
    })
})

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
