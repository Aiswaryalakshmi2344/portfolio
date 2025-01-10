import 'react';
import './certifications.css'; // Ensure you import the CSS file

const Certifications = () => (
  <section className="certifications">
    <h2>Certifications</h2>
    <ul>
      <li>
        <strong>Machine Learning with Python </strong>
        <p>
        This intensive program, held over a
 period of 4 months,  with comprehensive knowledge and hands-on
 experience in various aspects of python programming and Front End.        </p>
        <a
          href="/DTPYC0247.pdf"  // Ensure the correct path to the PDF file
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="view-certificate-btn">View Certificate</button>
        </a>
      </li>
    </ul>
  </section>
);

export default Certifications;
