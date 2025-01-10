import  'react';
import './home.css';
import me from './me.jpg'; // Ensure the correct path to your image

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-profile-photo">
        <img src={me} alt="Aiswaryalakshmi TR" />
      </div>
      <div className="content">
        <h1>Welcome to My Portfolio</h1>
        <p>
          Hello, I’m <strong>Aiswaryalakshmi TR</strong> <br/>MERN Stack Developer | JAVASCRIPT. 
        </p>
        <a href="/AiswaryalakshmiTR_Resume.pdf" className="download-button" download>
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Home;
