import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./book.css";

const URL = "http://localhost:5000/api/books/poetry";

const fetchHandler = async () => {
  try {
    const response = await axios.get(URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return []; // Return an empty array in case of error
  }
};

const Education = ({ addToCart }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchHandler().then((data) => setBooks(data));
  }, []);

  const handleAddToCart = (book) => {
    const confirmed = window.confirm(`Are you sure you want to add "${book.name}" to your cart?`);
    if (confirmed) {
      addToCart(book);
    }
  };

  return (
    <>
      <div className="container-fluid py-5">
        <section className="container">
          <div className="row row-cols-1 row-cols-lg-4 row-cols-md-2 cols-12 g-4">
            {books.map((book, index) => (
              <div className="col" key={index}>
                <div className="card">
                  <img src={book.image} alt=""/>
                  <article>{book.author}</article>
                  <h3>{book.name}</h3>
                  <p>{book.description}</p>
                  <h2>{book.price}</h2>
                  <button type='button' className='btn btn-outline-dark' onClick={() => handleAddToCart(book)}>Issue</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default Education;
