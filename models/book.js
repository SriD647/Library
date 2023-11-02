//imports mongoose library
const mongoose = require('mongoose')

//defines Mongoose schema for a book object
const bookSchema = new mongoose.Schema({
    title:{type:String,required:true},
    author:{type:String, required:true},
    publication:{type: String, required: true, match: /^\d{4}-\d{2}-\d{2}$/ }, //format YYYY-MM-DD
    date:{type: String, required: true, match: /^\d{4}-\d{2}-\d{2}$/}, //format YYYY-MM-DD
    quantity: {type:Number, required:true}

})

//creates a Mongoose model named Book based on the specified schema (bookSchema)
const Book = mongoose.model('Book',bookSchema)

//exports the Book model
module.exports = Book