// RegistrationForm.js
import React, { useState } from 'react';
import axios from 'axios';
import register from '../img/re1.jpg'
import { useNavigate } from 'react-router-dom';
import './register.css';
const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/books/register', formData);
      navigate('/'); 
      console.log(response.data);
    // Do something with the response, like displaying a success message or redirecting the user
    } catch (error) {
      console.error('Registration error:', error.response.data.message);
      // Handle registration error, like displaying an erressage to the user
    }
  };


  return (
    <>
    <div className="login-container">
    <div className="login-image-container">
        <img src={register} alt="login" className="login-image" />
      </div>
      <div className="login-form-container">
        <div className="login-form">
          <form onSubmit={handleSubmit}>
          <div className="login-input-container">
              <label htmlFor="name" className="login-label">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="login-input"
              />
            </div>
            <div className="login-input-container">
              <label htmlFor="email" className="login-label">Email</label>
              <input
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="login-input"
              />
            </div>
            <div className="login-input-container">
              <label htmlFor="password" className="login-label">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="login-input"
              />
            </div>
            <br></br>
            <button type="submit" className="login-button">Register</button><br></br>
           
          </form>
        </div>
      </div>
      
    </div>
   
  </>
  );
};

export default Register;
