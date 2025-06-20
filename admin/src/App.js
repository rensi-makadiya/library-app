// app.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import BrowserRouter
import Addbook from "./pages/Addbook";
import Issue from "./pages/issue";
import Home from "./pages/home";

const App = () => {
  return (
    <React.Fragment>
      <Router> {/* Wrap your Routes with Router */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/add" element={<Addbook />} exact />
            <Route path="/issue" element={<Issue />} exact />
          </Routes>
        </main>
      </Router>
    </React.Fragment>
  );
};

export default App;
