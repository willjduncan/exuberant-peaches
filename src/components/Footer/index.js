import React from "react";
import github from "./../../assets/icons/github.png";
import linkedin from "./../../assets/icons/linkedin.png";
import author from "./../../assets/icons/open-book.png";

function Footer() {
  return (
    <footer>
      <a href="https://github.com/willjduncan" target="_blank" rel="noreferrer">
        <img src={github} className="icon" alt="cover" />
      </a>
      <a
        href="https://linkedin.com/in/will-j-duncan"
        target="_blank"
        rel="noreferrer"
      >
        <img src={linkedin} className="icon" alt="cover" />
      </a>
      <a
        href="https://www.willduncanauthor.com"
        target="_blank"
        rel="noreferrer"
      >
        <img src={author} className="icon" alt="cover" />
      </a>
      <h3 className="contact-email">
        For more, please email me at willdunc12@gmail.com
      </h3>
      <div className="copyright">&copy; 2025 willjduncan.</div>
    </footer>
  );
}

export default Footer;
