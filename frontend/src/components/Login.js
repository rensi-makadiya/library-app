import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Login from '../img/login.jpg';
import './login.css'
const LoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errorMessage, setErrorMessage] = useState(''); // Define errorMessage state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Check if email and password are filled
    if (!formData.email || !formData.password) {
      setErrorMessage("Please enter both email and password");
      return;
    }
  
    try {
      const response = await axios.post('http://localhost:5000/api/books/login', formData);
      console.log(response.data);
      navigate('/home');
    } catch (error) {
      console.error('Login error:', error.response.data.message);
      setErrorMessage("Enter your valid email and password");
    }
  };
  

  return (
    <>
      <div className="login-container">
        <div className="login-image-container">
          <img src={Login} alt="login" className="login-image" />
        </div>
        <div className="login-form-container">
          <div className="login-form">
            <form onSubmit={handleSubmit}>
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
              <button type="submit" className="login-button">Login</button><br></br><br></br>
              {errorMessage && <p className="error-message">{errorMessage}</p>}
              
              <p className="register-message">Don't have an account? <a href="/register">Register here</a></p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
