import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
          <div className="logo">Yogesh Chougule</div>
          <div className={`nav-links ${isOpen ? "open" : ""}`}>
            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
            <Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
            <Link to="/skills" onClick={() => setIsOpen(false)}>Skills</Link>
            <Link to="/experience" onClick={() => setIsOpen(false)}>Experience</Link>
            <Link to="/certifications" onClick={() => setIsOpen(false)}>Certifications</Link>
            <Link to="/achievements" onClick={() => setIsOpen(false)}>Achievements</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          </div>
          <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      );
}
export default Navbar;