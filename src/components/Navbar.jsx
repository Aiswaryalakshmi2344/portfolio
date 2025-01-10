import  { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="navbar">
            <h1 className="navbar-logo">AISWARYALAKSHMI TR</h1>
            <ul className={`navbar-links ${isMobileMenuOpen ? 'navbar-mobile' : ''}`}>
                <li><Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
                <li><Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About</Link></li>
                <li><Link to="/skills" onClick={() => setIsMobileMenuOpen(false)}>Skills</Link></li>
                <li><Link to="/projects" onClick={() => setIsMobileMenuOpen(false)}>Projects</Link></li>
                <li><Link to="/experience" onClick={() => setIsMobileMenuOpen(false)}>Experience</Link></li>
                <li><Link to="/education" onClick={() => setIsMobileMenuOpen(false)}>Education</Link></li>
                <li><Link to="/certifications" onClick={() => setIsMobileMenuOpen(false)}>Certifications</Link></li>
                <li><Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link></li>
            </ul>
            <div className="navbar-hamburger" onClick={toggleMobileMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    );
};

export default Navbar;
