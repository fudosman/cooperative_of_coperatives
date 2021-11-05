const express = require('express');
const mongoose = require('mongoose');
const postsRoute = require('./routes/posts');
const errorPage = require('./routes/error');
const { port } = require('./config/config');
const app = express();
require('dotenv/config');

mongoose
  .connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connected to MongoDB Atlas!");
  })
  .catch((error) => {
    console.log("Unable to connect to MongoDB Atlas!");
    console.error(error);
  });

// middleware
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

// for parsing application/json
app.use(express.json()) ;

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true })) ;
app.use(express.static('./public'));

// ALL ROUTES  
app.use('/posts',postsRoute) ;
app.all('*', (req,res)=>{
  res.status(404).send('Page not found');
});



// listening on port env or 8080
app.listen(port);