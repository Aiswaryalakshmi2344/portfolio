import  "react";
import "./Skills.css"; // Import the CSS for styling

const Skills = () => {
  return (
    <div className="skills-container">
      <div className="skills-content">
        <h1>My Skills</h1>

        {/* Technical Skills */}
        <div className="skills-category">
          <h2>Technical Skills</h2>
          <ul className="skills-list">
            <li>HTML5, CSS3, JavaScript (ES6+)</li>
            <li>React.js,  React Router</li>
            <li>Node.js, Express.js</li>
            <li>MongoDB, Mongoose</li>
           
            <li>Git, GitHub</li>
            <li>Bootstrap</li>
          </ul>
        </div>

        

        {/* Soft Skills */}
        <div className="skills-category">
          <h2>Soft Skills</h2>
          <ul className="skills-list">
            <li>Problem-Solving</li>
            <li>Team Collaboration</li>
            <li>Time Management</li>
            <li>Adaptability and Flexibility</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
