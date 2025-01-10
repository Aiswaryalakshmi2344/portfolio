import "react";
import "./about.css"; // Import the CSS for styling
import mee from "./i am.jpg"; // Import the profile photo

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        {/* Profile Photo */}
        <div className="profile-photo">
          <img src={mee} alt="Aiswaryalakshmi TR" />
        </div>
        {/* About Title */}
        <h1>About Me</h1>
        <p className="about-intro">
          Hi, I’m <strong>Aiswaryalakshmi TR</strong>, a passionate MERN Stack Developer and a lifelong learner. 
          With a strong foundation in web development, I enjoy building scalable, user-friendly applications 
          while continuously expanding my skills.
        </p>

        {/* About Details */}
        <div className="about-details">
          <h2>Professional Summary</h2>
          <p>
            As a MERN Stack Developer, I specialize in creating responsive, dynamic, and modern web applications 
            using technologies like MongoDB, Express.js, React, and Node.js. I thrive on solving complex problems 
            and delivering quality solutions.
          </p>

          <h2>Hobbies and Interests</h2>
          <ul className="about-hobbies">
            <li>Coding and exploring new web technologies</li>
            <li>Writing and reading tech blogs</li>
            <li>Listening to music</li>
          </ul>

          <h2>Contact Information</h2>
          <p>
            <strong>Email:</strong> aiswaryalakshmi2344@gmail.com<br />
            <strong>Phone:</strong> +91 8589862393<br />
            <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/aiswaryalakshmi" target="_blank" rel="noopener noreferrer">linkedin.com/in/aiswaryalakshmi</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
