//imports Book model
const Book = require("../models/book");

// Create (C)- Adds book
exports.addBook = async function (req, res) {
    try {

      // destructure to extract specific keys from req.body  
      const { title, author, publication, date, quantity } = req.body;
      
      // error handling case if either property is missing
      if (!title || !author || !publication || !date || !quantity) {
        return res.status(400).json({ message: "All fields are required." });
      }
      
      // creates book
      const book = await Book.create(req.body)

      //sends back book as json body
      res.json(book);
      
    } catch (error) {

       // error handling for BAD request
      res.status(400).json({ message: error.message });
    }  
};

// Read (R)- Lists all books in library
exports.listAllBooks = async (req, res) => {
    try {

        // finds all books in library
        const books = await Book.find({});
        
        // if no books were added, it'll inform user that library is empty
        if (books.length === 0) {
            return res.status(404).json({ message: "Library empty-no books added" });
        }

        res.json(books);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


// Read (R)- Lists all books of specified criteria
exports.searchBooks = async (req, res) => {
    try {
        const { criteria, keyword } = req.body;
        let query = {};
        
        // error handling for when either criteria or keyword is missing
        if (!criteria || !keyword) {
            return res.status(400).json({ message: "Both criteria and keyword are required." });
        }
        
        // use $regex to perform case-insensitive and partial matching searches
        if (criteria === 'title') {
            query.title = { $regex: new RegExp(keyword, 'i') };
        } else if (criteria === 'author') {
            query.author = { $regex: new RegExp(keyword, 'i') };
        } else {
            return res.status(404).json({ message: "No books found." });
        }

        const books = await Book.find(query);
        res.json(books);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


// Read (R)- Lists details of book with id specified in params
exports.viewBookDetails = async (req, res) => {
    try {

        // finds book by id specified in url
        const book = await Book.findById(req.params.id);

        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }

        res.json(book);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update (U)- Updates book with id specified in params
exports.updateBookDetails = async function(req, res){
    try {

        // updates book with specified id, and automatically saves the updates in database
        const updatedBook = await Book.findOneAndUpdate({ _id: req.params.id}, req.body, { new: true })

        if (!updatedBook) {
            return res.status(404).json({ message: 'Book not found' });
        }

        res.json(updatedBook)

   } catch (error){
     res.status(400).json({message: error.message})
    }
}

// Delete (D)- Deletes book with id specified in params
exports.removeBook = async function(req, res) {
    try {

        // deletes book with specified id from database and stores in removedBook variable
        const removedBook= await Book.findOneAndDelete({_id: req.params.id})
        
        if (!removedBook) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.status(200).json({message: 'Book sucessfully deleted'})
    }     
    catch(error) {
        res.status(400).json({message: error.message})
    }
}