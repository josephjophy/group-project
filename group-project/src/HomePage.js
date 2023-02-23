import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import FuelQuoteForm from './FuelQuoteForm';

function HomePage() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavClick = (page) => {
    setCurrentPage(page);
  };

  const handleGetQuoteClick = () => {
    setCurrentPage('fuel');
  };

  return (
    <div>
      <h1>Welcome!</h1>
      <p>Click Below To Get A Quote!</p>
      <Link to="fuel">
        <button onClick={handleGetQuoteClick}>Get a Quote</button>
      </Link>
    {currentPage === 'fuel' && <FuelQuoteForm />}
    </div>
    
  );
}

export default HomePage;