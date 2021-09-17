import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>About Me</h2>

            <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investors</Link>
          </div>
        </div>

        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Contact Me</h2>
            <Link to="/">Contact</Link>
          </div>
        </div>

        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Social Media</h2>

            <Link
              class="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="social-icons"></div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
