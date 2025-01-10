import  'react';
import './Home.css'; // Import the CSS for styling

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <img
          src="/your-image.jpg" // Replace with the correct path to your photo (also place it in the public folder)
          alt="Aiswaryalakshmi TR"
          className="profile-photo"
        />
        <h1>Aiswaryalakshmi TR</h1>
        <p>MERN Stack Developer | Passionate Learner</p>
        <a
          href="/AiswaryalakshmiTR.pdf"
          download="AiswaryalakshmiTR_Resume.pdf"
          className="download-button"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Home;
