import React from "react";
import github from "./../../assets/icons/github.png";
import linkedin from "./../../assets/icons/linkedin.png";
import author from "./../../assets/icons/open-book.png";

function Footer() {
  return (
    <footer>
      {/* <div> */}

      <a href="https://github.com/willjduncan" target="_blank">
        <img src={github} className="icon" alt="cover" />
      </a>
      <a href="https://linkedin.com/in/will-j-duncan" target="_blank">
      <img src={linkedin} className="icon" alt="cover" />
      </a>
      <a href="https://www.willduncanauthor.com"  target="_blank">
      <img src={author} className="icon" alt="cover" />
      </a>
      <div className= "copyright">&copy; 2022 willjduncan.</div>
      {/* </div> */}
      

      {/* <a href="https://www.flaticon.com/free-icons/book" title="book icons">Icons created by Roundicons Premium and Pixel Buddha - Flaticon</a> */}
    </footer>
  );
}

export default Footer;
