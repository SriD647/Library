//imports the Express.js framework
const express = require('express')

//Creates an Express router object, allowing to define routes and middleware 
const router = express.Router()

//imports all controller functions from bookController.js
const bookControllers = require('../controllers/bookController')

// Create (C)- Adds book
router.post('/', bookControllers.addBook)

// Read (R)- Lists all books in library
router.get('/', bookControllers.listAllBooks)

// Read (R)- Lists all books of specified criteria
router.get('/search', bookControllers.searchBooks)

// Read (R)- Lists details of book with id specified in params
router.get('/:id', bookControllers.viewBookDetails)

// Update (U)- Updates book with id specified in params
router.put('/:id', bookControllers.updateBookDetails)

// Delete (D)- Deletes book with id specified in params
router.delete('/:id', bookControllers.removeBook)

//exports the defined Express router object
module.exports = router 