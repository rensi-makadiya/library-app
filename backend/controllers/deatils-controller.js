const Details = require("../model/Details");

const Issue = async(req,res,next) =>{
    const {  studentName,rollNumber,  studentClass,bookName,issueDate,  returnDate, pages } = req.body;
    try {
      const details = new Details({
        studentName,
        rollNumber,
        studentClass,
        bookName,
        issueDate,
        returnDate,
        pages,
      });
      await details.save();
      return res.status(201).json({ details });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Unable to add book" });
    }
  }

  module.exports = {
    Issue,
};

  