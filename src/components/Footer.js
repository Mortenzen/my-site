import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer-container">
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>About Me</h2>

            <Link to="/education">Education</Link>
            <Link to="/experience">Experience</Link>
            <Link to="/todo">ToDo</Link>
          </div>
        </div>

        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Contact Me</h2>
            <a href="https://www.linkedin.com/in/ramzi-nofal-914624156/">
              Contact
            </a>
          </div>
        </div>

        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Social Media</h2>
            <a href="https://www.facebook.com">
              <i class="fab fa-facebook-f" />
            </a>
            <a href="https://www.linkedin.com/in/ramzi-nofal-914624156/">
              <i class="fab fa-linkedin" />
            </a>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="social-icons"></div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
