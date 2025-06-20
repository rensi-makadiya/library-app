import React, { useState } from 'react';
import axios from 'axios';
import './Addbook.css';
import { useNavigate } from 'react-router-dom';

const Addbook = () => {
  const history = useNavigate();
  const [input, setInput] = useState({
    name: '',
    description: '',
    price: '',
    author: '',
    image: '',
    selectedOption: ''
  });
  const [checked, setChecked] = useState(false);
  const [showModal, setShowModal] = useState(false); // State to control the modal visibility

  const handleChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSelectChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      selectedOption: e.target.value
    }));
  };

  const sendRequest = async () => {
    await axios.post("http://localhost:5000/api/books/", {
      name: String(input.name),
      author: String(input.author),
      description: String(input.description),
      category: String(input.selectedOption),
      price: Number(input.price),
      image: String(input.image),
      available: Boolean(input.available),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Check if any of the required fields are empty
    if (!input.name || !input.description || !input.selectedOption || !input.price || !input.author || !input.image) {
      alert("Please fill in all the fields");
      return;
    }
    setShowModal(true); // Open the modal when the form is submitted
  };

  const handleConfirm = async () => {
    await sendRequest();
    setInput({
      name: '',
      description: '',
      price: '',
      author: '',
      image: '',
      selectedOption: ''
    });
    setChecked(false);
    setShowModal(false); // Close the modal after the book is added
    history();
  };

  const handleCancel = () => {
    setShowModal(false); // Close the modal without adding the book
  };

  return (
    <div className='add'>
      <form className="container main" onSubmit={handleSubmit}>
      
        <div className='row'>
          <div className="col right">
            <div className="input-box">
              <div className="mb-3 input-field">
              <label htmlFor="name">Name</label>
                <input type="text" className="input" id="name" name="name" value={input.name} onChange={handleChange} />
              
              </div>

              <div className="mb-3 input-field">
              <label htmlFor="description">Description</label>
                <input type="text" className="input" id="description" name="description" value={input.description} onChange={handleChange} />
                
              </div>
             


              <div className="mb-3 input-field">
              <label htmlFor="selectedOption">Category</label>
                <select className=" input" aria-label="Default select example" onChange={handleSelectChange} name="selectedOption">
                <option value="0">Category</option>
                  <option value="1">Education</option>
                  <option value="2">Romantic</option>
                  <option value="3">Poetry</option>
                  <option value="4">Horror</option>
                  <option value="5">Mystery</option>
                  <option value="6">Biography</option>
                </select>
               
              </div>

              <div className="mb-3 input-field">
              <label htmlFor="price">Price</label>
                <input type="number" className="input" id="price" name="price" value={input.price} onChange={handleChange} />
               
              </div>

              <div className="mb-3 input-field">
              <label htmlFor="author">Author</label>
                <input type="text" className="input" id="author" name="author" value={input.author} onChange={handleChange} />
               
              </div>

              <div className="mb-3 input-field">
              <label htmlFor="image">Image</label>
                <input type="text" className="input" id="image" name="image" value={input.image} onChange={handleChange} />
               
              </div>

              <div className="mb-3 form-check input-field">
              <label htmlFor="available">Available</label>
                <input type="checkbox" className="form-check-input" id="available" checked={checked} onChange={() => setChecked(!checked)} />
                
              </div>

              <button type="submit" className="btn btn-outline-dark btn-block ">
                Add Book
              </button>
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
                <p>Are you sure you want to add {input.name}?</p>
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

export default Addbook;
