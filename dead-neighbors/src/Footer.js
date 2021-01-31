import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer-main">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/blog">
            <li>Blog</li>
          </Link>
          <Link to="/resources">
            <li>Resources</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/info">
            <li>US Covid Info</li>
          </Link>
        </ul>
      </div>
      <span>
        <a target="_blank" rel="nofollow noopener noreferrer" href="/">
          Suggestions / Issues / Contact
        </a>
      </span>
      <div className="footer-credit">
        <div className="title">Credits:&nbsp;</div>
        <div className="credits">
          <div>Data Source - The COVID Tracking Project at The Atlantic</div>
          <span>
            Hero Photo by{" "}
            <a
              target="_blank"
              rel="nofollow noopener noreferrer"
              href="https://unsplash.com/@aimlesscode?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
            >
              Emin BAYCAN
            </a>{" "}
            on{" "}
            <a
              target="_blank"
              rel="nofollow noopener noreferrer"
              href="https://unsplash.com/s/photos/face-mask?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
            >
              Unsplash
            </a>
          </span>
          <span>
            Typewriter Photo by{" "}
            <a href="https://unsplash.com/@markuswinkler?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
              Markus Winkler
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com/s/photos/blog-covid?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
              Unsplash
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
