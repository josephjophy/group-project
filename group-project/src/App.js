import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FuelQuoteForm from './FuelQuoteForm';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import './LoginPage.css';

function App() {
  const [currentPage, setCurrentPage] = useState('login');

  const handleNavClick = (page) => {
    setCurrentPage(page);
  };
  return (
    
      <div>
        <nav>
          <ul>
            <li
              onClick={() => handleNavClick('login')}>Login Page
            </li> 
            <li
              onClick={() => handleNavClick('home')}>Home
            </li>
            <li
              onClick={() => handleNavClick('fuel')}>Fuel Quote Form
            </li>
          </ul>
        </nav>

      {currentPage === 'home' && <HomePage />}
      {currentPage === 'fuel' && <FuelQuoteForm />}
      {currentPage === 'login' && <LoginPage />}
      </div>
  );
}

export default App;
