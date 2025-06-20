const express = require("express");
const router = express.Router();
const booksController = require("../controllers/books-controller");
const DetailsController = require("../controllers/deatils-controller");
const userController = require("../controllers/user-controller");
router.get('/education', booksController.getEducationBooks);
router.get('/horror', booksController.getHorrorBooks);
router.get('/romantic', booksController.getRomanticBooks);
router.get('/poetry', booksController.getPoetryBooks);
router.get('/mystery', booksController.getMysteryBooks);
router.get('/biography', booksController.getBiographyBooks);

// Routes for CRUD operations
router.get("/", booksController.getAllBooks);
router.post("/", booksController.addBook);
router.get("/:id", booksController.getById);
router.delete("/delete", booksController.getDelete);

router.post("/issue", DetailsController.Issue);

router.post("/register", userController.register);
router.post("/login",userController.login);

module.exports = router;
