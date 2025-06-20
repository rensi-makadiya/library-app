import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './home.css';

function Home() {
  const navigate = useNavigate(); // Initialize navigate

  const handleAddBook = () => {
    // Redirect to the Addbook page
    navigate('/add');
  };

  const handleIssue = () => {
    // Redirect to the Issue page
    navigate('/issue');
  };

  return (
    <div className='home'>
      <div className="button-container">
        {/* Call handleAddBook function on button click */}
        <button type="button" className="button" onClick={handleAddBook}>Addbook</button><br></br>
        {/* Call handleIssue function on button click */}
        <button type="button" className="button" onClick={handleIssue}>Issue</button><br></br>
      </div>
    </div>
  );
}

export default Home;
