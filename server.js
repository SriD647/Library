//load environment variables from .env file into the process environment.
require('dotenv').config()

//requires app module from app.js file
const app = require('./app')

//imports mongoose library
const mongoose = require('mongoose')

//can specify port in .env file if port needs to be changed. Default is 3000.
const PORT = process.env.PORT || 3000 

//establishes a connection to database using the MONGO_URI from .env file
mongoose.connect(process.env.MONGO_URI)

//event listener for open event with callback function that logs the message 'MongoDB is connected'
mongoose.connection.once('open', () => console.log('MongoDB is connected'))

//starts server, listening for incoming HTTP requests on the specified PORT
app.listen(PORT, () => {
    console.log(`running on port: ${PORT}`)
})