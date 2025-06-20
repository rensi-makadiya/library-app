import React, { useState } from 'react';
import axios from 'axios';
import './Addbook.css';
import { useNavigate } from 'react-router-dom';


const Issue = () => {
  const history = useNavigate();
  const [input, setInput] = useState({
    studentName: '',
    studentClass: '',
    bookName: '',
    issueDate: '',
    returnDate: '',
    pages: '',
    rollNumber: ''
  });
  const [showModal, setShowModal] = useState(false);
  const handleChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };
  const sendRequest = async () => {
    await axios.post("http://localhost:5000/api/books/issue", {
      studentName: String(input.studentName),
      studentClass: String(input.studentClass),
      bookName: String(input.bookName),
      issueDate: String(input.issueDate),
      returnDate: String(input.returnDate),
      pages: Number(input.pages),
      rollNumber: Boolean(input.rollNumber),
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Check if any of the required fields are empty
    if (!input.studentName || !input.studentClass || !input.bookName || !input.issueDate || !input.returnDate || !input.pages || !input.rollNumber) {
      alert("Please fill in all the fields");
      return;
    }
    setShowModal(true); // Open the modal when the form is submitted
  };
  const handleConfirm = async () => {
    await sendRequest();
    setInput({
      studentName: '',
      studentClass: '',
      bookName: '',
      issueDate: '',
      returnDate: '',
      pages: '',
      rollNumber: ''
    });
    
    setShowModal(false); // Close the modal after the book is added
    history();
  };

  const handleCancel = () => {
    setShowModal(false); // Close the modal without adding the book
  };
  
  

  return (
    <div className='add'>
   
     
        <form className="container  main" onSubmit={handleSubmit}>

        <div className='row'>
      <div className="col right">
        <div className="input-box">
          <div className="mb-3 input-field">
          <label className="mb-2">Student Name:</label>
            <input
              type="text"
              className="input" 
              name="studentName"
              value={input.studentName}
              onChange={handleChange}
            />
              
          </div>
          <div className="mb-3 input-field">
          <label className="mb-2">Roll Number:</label>
            <input
              type="text"
              className="input" 
              name="rollNumber"
              value={input.rollNumber}
              onChange={handleChange}
            />
             
          </div>
         
          <div className="mb-3 input-field">
          <label className="mb-2">Student Class:</label>
            <input
              type="text"
              className="input" 
              name="studentClass"
              value={input.studentClass}
              onChange={handleChange}
            />
             
          </div>
          <div className="mb-3 input-field">
          <label className="mb-2">Book Name:</label>
            <input
              type="text"
              className="input" 
              name="bookName"
              value={input.bookName}
              onChange={handleChange}
            />
            
          </div>
          <div className="mb-3 input-field">
          <label className="mb-2">Issue Date:</label>
            <input
              type="date"
              className="input" 
              name="issueDate"
              value={input.issueDate}
              onChange={handleChange}
            />
              
          </div>
          <div className="mb-3 input-field">
          <label className="mb-2">Return Date:</label>
            <input
              type="date"
              className="input" 
              name="returnDate"
              value={input.returnDate}
              onChange={handleChange}
            />
             
          </div>
          <div className="mb-3 input-field">
          <label className="mb-2">Pages:</label>
            <input
              type="number"
              className="input" 
              name="pages"
              value={input.pages}
              onChange={handleChange}
            />
             
          </div>
          
          <button type="submit" className="btn btn-outline-dark">Submit</button>
        </div>
        </div>
        </div>
        </form>
        {showModal && (
        <div className="modal show" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirmation</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(null)}></button>
              </div>
              <div className="modal-body">
                <p>Are you sure you want to Book?</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleConfirm}>OK</button>
                <button type="button" className="btn btn-primary" onClick={handleCancel}>Cancel</button>
              </div>
            </div>
          </div>
        </div>
      )}
      {showModal && <div className="modal-backdrop show"></div>}
     </div>
     
  );
};

export default Issue;
