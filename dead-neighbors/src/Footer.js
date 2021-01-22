import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <ul>
        <Link to="/" >
          <li>Home</li>
        </Link>
        <Link to="/blog" >
          <li>Blog</li>
        </Link>
        <Link to="/resources" >
          <li>Resources</li>
        </Link>
        <Link to="/about" >
          <li>About</li>
        </Link>
        <Link to="/info" >
          <li>US Covid Info</li>
        </Link>
      </ul>
      <h3>Dead Neighbors</h3>
      <span>
        Hero Photo by{" "}
        <a href="https://unsplash.com/@aimlesscode?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
          Emin BAYCAN
        </a>{" "}
        on{" "}
        <a href="https://unsplash.com/s/photos/face-mask?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
          Unsplash
        </a>
      </span>
    </footer>
  );
};

export default Footer;
