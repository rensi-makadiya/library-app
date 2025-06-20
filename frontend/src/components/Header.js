import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/">BOOKS</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/book">Issue</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/about">About Us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/rating">Rating</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/contact">Contact Us</NavLink>
              </li>
            
              <li className="nav-item dropdown">
          <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Books
          </NavLink>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><NavLink className="dropdown-item drop" to="/eduction">Education</NavLink></li>
            <li><NavLink className="dropdown-item drop" to="/romantic">Romantic</NavLink></li>
            <li><NavLink className="dropdown-item drop" to="/mystery">Mystery</NavLink></li>
            <li><NavLink className="dropdown-item drop" to="/poetry">Poetry</NavLink></li>
            <li><NavLink className="dropdown-item drop" to="/biography">Biography</NavLink></li>
            <li><NavLink className="dropdown-item drop" to="/horror">Horror</NavLink></li>
          </ul>
        </li>
             
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
