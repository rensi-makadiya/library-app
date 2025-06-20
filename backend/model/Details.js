const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const detailsSchema = new Schema({
    studentName: {
        type: String,
        required: true
    },
    rollNumber: {
        type: String,
        required: true
    },
   studentClass: {
        type: String,
        required: true
    },
   bookName: {
        type: String, 
        required: true
    },
   issueDate: {
    type: String,
    required: true
    },
   returnDate: {
        type: String,
        required: true
    },
   pages: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("Details", detailsSchema);
