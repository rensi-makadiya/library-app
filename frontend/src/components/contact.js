import React, { useState } from 'react';
//import con from '../img/con.jpg';
import './contact.css';
import bookk from '../img/bookk.avif';
import './Addbook.css'

function Contact() {
  // State variables for form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Function to handle changes in form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form Data:", formData);
    // Clear form fields
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div>
      <div className="bg-background"></div>
      <div className="container py-5">
        <div className="row py-5 g-3">
          <div className="col-md-6 first_col">
            <h1 className="text-center mt-1">Contact Us</h1>
            <form className="p-4 mt-4" onSubmit={handleSubmit}>
              <div className="mb-3">
              <label htmlFor="nameInput" className="form-label">Enter your Name</label>
                <input type="text" className="input" id="nameInput" name="name" value={formData.name} onChange={handleChange} />
               
              </div>
              <div className="mb-3">
              <label htmlFor="emailInput" className="form-label">Email ID</label>
                <input type="text" className="input" id="emailInput" name="email" value={formData.email} onChange={handleChange} />
               
              </div>
              <div className="mb-3">
              <label htmlFor="messageTextarea" className="form-label ">Enter your message</label>
                <textarea type="text" className="input mess" id="messageTextarea" name="message" rows={2} cols={50} value={formData.message} onChange={handleChange}></textarea>
                
              </div>
              <div className="mb-3">
              <button type='button' className='btn btn-outline-dark '>submit</button>
              </div>
            </form>
          </div>
          <div className="col-md-6 sec_col">
            <img src={bookk} className='conimg' alt="Contact" />
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Contact;
