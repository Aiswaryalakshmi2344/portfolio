import 'react';
import './footer.css'; // Ensure the correct path to your CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2025 Aiswaryalakshmi TR. All rights reserved.</p>
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/aiswarya-lakshmi-tr-5a26aa2b2"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Aiswaryalakshmi2344"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            GitHub
          </a>
          <a
            href="mailto:aiswaryalakshmi2344@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
