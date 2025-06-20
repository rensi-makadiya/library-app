import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./book.css";

const Horror = ({ addToCart }) => {
  const URL = "http://localhost:5000/api/books/horror"; // Corrected URL

  const fetchHandler = async () => {
    try {
      const response = await axios.get(URL);
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return []; // Return an empty array in case of error
    }
  };

  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchHandler().then((data) => setBooks(data));
  }, []);

  const [selectedBook, setSelectedBook] = useState(null);

  const handleAddToCart = (book) => {
    setSelectedBook(book);
  };

  const confirmAddToCart = () => {
    if (selectedBook) {
      addToCart(selectedBook);
      setSelectedBook(null); // Reset selectedBook after adding to cart
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

      {/* Confirmation Modal */}
      {selectedBook && (
        <div className="modal show" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirmation</h5>
                <button type="button" className="btn-close" onClick={() => setSelectedBook(null)}></button>
              </div>
              <div className="modal-body">
                <p>Are you sure you want to add "{selectedBook.name}" to your cart?</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setSelectedBook(null)}>Cancel</button>
                <button type="button" className="btn btn-primary" onClick={confirmAddToCart}>Confirm</button>
              </div>
            </div>
          </div>
        </div>
      )}
      {selectedBook && <div className="modal-backdrop show"></div>}
    </>
  );
}

export default Horror;
