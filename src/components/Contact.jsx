import 'react';
import './contact.css'; // Ensure you import the CSS file

const Contact = () => (
  <section className="experience">
    <h2>Contact</h2>
    <div className="experience-item">
      <h3>Email:</h3>
      <p>
        <a href="mailto:aiswaryalakshmi2344@gmail.com" className="email-link">
          aiswaryalakshmi2344@gmail.com
        </a>
      </p>
    </div>
    <div className="experience-item">
      <h3>Phone:</h3>
      <p>+91 8589862393</p>
    </div>
    <div className="experience-item">
      <h3>
        <a href="https://www.linkedin.com/in/aiswarya-lakshmi-tr-5a26aa2b2" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </h3>
    </div>
    <div className="experience-item">
      <h3>
        <a href="https://github.com/Aiswaryalakshmi2344" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </h3>
    </div>
  </section>
);

export default Contact;
