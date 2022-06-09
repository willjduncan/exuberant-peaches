import React, { useState } from 'react';
import Nav from '../Nav';
import Resume from '../pages/Resume';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import ContactForm from '../pages/Contact';

export default function Header() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
        return <ContactForm />;
      }
  };

  const handlePageChange = (page) => setCurrentPage(page);
  
  return (
    <div>
    <header>
      <h1>
        <a href="/">WILL DUNCAN</a>
      </h1>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
    </header>
      {renderPage()}
    </div>
  );
}

 



