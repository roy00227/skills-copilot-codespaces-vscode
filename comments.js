// Create web server using express
const express = require('express')
const app = express()

// Create body parser to parse the body of the request
const bodyParser = require('body-parser')
app.use(bodyParser.json())

// Create database connection
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/comments', { useNewUrlParser: true })

// Create schema for comments
const Comment = mongoose.model('Comment', {
  message: String,