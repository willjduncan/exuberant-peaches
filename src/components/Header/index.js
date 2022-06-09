import React, { useState } from 'react';
import Nav from '../Nav';
// import Home from './pages/Home';
import About from '../pages/About';
import Project from '../pages/Project';
import ContactForm from '../pages/Contact';

export default function Header() {
  const [currentPage, setCurrentPage] = useState('Home');

  // TODO: Add a comment describing the functionality of this method
  const renderPage = () => {
    // if (currentPage === 'Home') {
    //   return <Home />;
    // }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Project') {
      return <Project />;
    }
    return <ContactForm />;
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
      {/* {renderPage()} */}
    </div>
  );
}

 



