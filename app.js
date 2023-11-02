//imports the Express.js framework
const express = require('express')

//imports all routes and their handlers from bookRoutes file
const bookRoutes = require('./routes/bookRoutes')

//creates an instance of the Express.js application,
const app = express()

//parse incoming JSON data in HTTP requests allowing us to handle JSON payloads sent by clients
app.use(express.json())

//defines a base route of /books. All routes defined will be accessible under this base route.
app.use('/books',bookRoutes)

//exports app module
module.exports = app