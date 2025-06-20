import React, { useState } from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Addbook from "./components/Addbook";
import Book from "./components/Book";
import About from "./components/about";
import Eduction from "./pages/eduction";
import Horror from "./pages/horror";
import Mystery from "./pages/mystery";
import Poetry from "./pages/poetry";
import Romantic from "./pages/romantic";
import Biography from "./pages/biography";
import Issue from "./components/issue";
import Contact from "./components/contact";
import Rating from "./components/Rating";
import Costmorr from './components/Costmerr';
import Login from "./components/Login";
import Register from "./components/Register";


const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <React.Fragment>
      <main>
        <Routes>
          <Route path="/home" element={<><Header /><Home /> </>} exact />
          <Route path="/add" element={<><Header /> <Addbook /></>} exact />
          <Route path="/book" element={<><Header /><Book cartItems={cart}/></>} exact />
          <Route path="/about" element={<><Header /><About /></>} exact />
          <Route path="/eduction" element={<><Header /><Eduction addToCart={addToCart}/></>} exact />
          <Route path="/horror" element={<><Header /><Horror addToCart={addToCart}/></>} exact />
          <Route path="/romantic" element={<><Header /><Romantic addToCart={addToCart}/></>} exact />
          <Route path="/poetry" element={<><Header /><Poetry addToCart={addToCart}/></>} exact />
          <Route path="/mystery" element={<><Header /><Mystery addToCart={addToCart}/></>} exact />
          <Route path="/biography" element={<><Header /><Biography addToCart={addToCart}/></>} exact />
          <Route path="/issue" element={<><Header /><Issue /></>} exact />
          <Route path="/contact" element={<><Header /><Contact /></>} exact />
          <Route path="/rating" element={<><Header /><Rating /></>} exact />
          <Route path="/review" element={<><Header /><Costmorr /></>} exact />
          <Route path="/" element={<Login />} exact />
        
          <Route path="/register" element={<Register />} exact />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
