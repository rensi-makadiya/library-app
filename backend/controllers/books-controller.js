const Book = require("../model/Book");


const getAllBooks = async (req, res, next) => {
  try {
    const books = await Book.find();
    if (!books.length) {
      return res.status(404).json({ message: "No books found" });
    }
    return res.status(200).json({ books });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const getById = async (req, res, next) => {
  const id = req.params.id;
  try {
    const book = await Book.findById(id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    return res.status(200).json({ book });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const addBook = async (req, res, next) => {
  const { name, author, description, price, available, image, category } = req.body;
  try {
    const book = new Book({
      name,
      author,
      description,
      price,
      available,
      image,
      category,
    });
    await book.save();
    return res.status(201).json({ book });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Unable to add book" });
  }
};

const getEducationBooks = async (req, res, next) => {
  try {
    const educationBooks = await Book.find({ category: 1 });
    if (educationBooks.length === 0) {
      return res.status(404).json({ message: 'No education books found' });
    }
    return res.json(educationBooks);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

const getHorrorBooks = async (req, res, next) => {
  try {
    const horrorBooks = await Book.find({ category: 4 });
    return res.json(horrorBooks);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: err.message });
  }
};

const getRomanticBooks = async (req, res, next) => {
  try {
    const romanticBooks = await Book.find({ category: 2 });
    return res.json(romanticBooks);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: err.message });
  }
};

const getPoetryBooks = async (req, res, next) => {
  try {
    const poetryBooks = await Book.find({ category: 3 });
    return res.json(poetryBooks);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: err.message });
  }
};




const getMysteryBooks = async (req, res, next) => {
  try {
    const mysteryBooks = await Book.find({ category: 5 });
    return res.json(mysteryBooks);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: err.message });
  }
};

const getBiographyBooks = async (req, res, next) => {
  try {
    const biographyBooks = await Book.find({ category: 6 });
    return res.json(biographyBooks);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: err.message });
  }
};

const getDelete = async (req, res, next) => {
  try {
    await Book.deleteMany({}); // Delete all documents in the Book collection
    return res.status(200).json({ message: "All books deleted successfully" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal server error" });
  }
};


const Issue = async(req,res,next) =>{
  const { Student_name,Roll_number,  Student_class,Book_name,Issue_date,  Return_date, Pages } = req.body;
  try {
    const details = new Details({
      Student_name,
      Roll_number,
      Student_class,
      Book_name,
      Issue_date,
      Return_date,
      Pages,
    });
    await details.save();
    return res.status(201).json({ details });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Unable to add book" });
  }
}
module.exports = {
  getAllBooks,
  addBook,
  getById,
  getEducationBooks,
  getHorrorBooks,
  getRomanticBooks,
  getPoetryBooks,
  getMysteryBooks,
  getBiographyBooks,
  getDelete,
  Issue,
};
