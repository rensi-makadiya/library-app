// Book.js
import { NavLink } from 'react-router-dom';
import React from 'react';
import "./bookI.css";

const Book = ({ cartItems }) => {
  return (
    <>
      <div>
      
       
      </div>
      <div>
        <div className=" book py-5">
          <section className="container">
      
            <div className="row row-cols-1 row-cols-lg-4 row-cols-md-2 cols-12 g-4">
              {cartItems.map((book, index) => (
                <div className="col" key={index}>
                  <div className="card box">
                    <img src={book.image} alt=""/>
                    <article>{book.author}</article>
                    <h3>{book.name}</h3>
                   
                    <h2>{book.price}</h2>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default Book;
