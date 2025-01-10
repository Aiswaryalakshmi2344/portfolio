import  'react';
import "./education.css"
const Education = () => (
  <section className="education">
    <h2>Education</h2>
    <div className="education-grid">
      <div className="education-card">
        <h3>B.Tech in Computer Science</h3>
        <p><strong>Institute:</strong> Mangalam College of Engineering (2020-2024)</p>
        <p><strong>CGPA:</strong> 6.63</p>
      </div>
      <div className="education-card">
        <h3>12th Grade</h3>
        <p><strong>Institute:</strong> GOVT VHSS Ponkunnam (2018-2020)</p>
        <p><strong>Percentage:</strong> 76%</p>
        <p><strong>Subjects:</strong> Physics, Chemistry, Mathematics, Computer Science</p>
      </div>
      <div className="education-card">
        <h3>10th Grade</h3>
        <p><strong>Institute:</strong> St. Mary’s GHS Kanjirappally (2013-2018)</p>
        <p><strong>Percentage:</strong> 90%</p>
      </div>
    </div>
  </section>
);

export default Education