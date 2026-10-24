import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Nav.css";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav>
      <h1>PORTFOLIO</h1>

      {/* Desktop Menu */}
      <ul className="desktopmenu">
        <Link
          to="home"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
          offset={-70}
        >
          <li>Home</li>
        </Link>
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
          offset={-70}
        >
          <li>About</li>
        </Link>
        <Link
          to="projects"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
          offset={-70}
        >
          <li>Projects</li>
        </Link>
        <Link
          to="certifications"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
          offset={-70}
        >
          <li>Certifications</li>
        </Link>
        <Link
          to="contact"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
          offset={-70}
        >
          <li>Contact</li>
        </Link>
      </ul>

      {/* Hamburger */}
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div className="ham"></div>
        <div className="ham"></div>
        <div className="ham"></div>
      </div>

      {/* Mobile Menu */}
      <ul className={`mobilemenu ${menuOpen ? "show" : ""}`}>
        <Link
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          offset={-70}
          onClick={closeMenu}
        >
          <li>Home</li>
        </Link>
        <Link
          to="about"
          spy={true}
          smooth={true}
          duration={500}
          offset={-70}
          onClick={closeMenu}
        >
          <li>About</li>
        </Link>
        <Link
          to="projects"
          spy={true}
          smooth={true}
          duration={500}
          offset={-70}
          onClick={closeMenu}
        >
          <li>Projects</li>
        </Link>
        <Link
          to="certifications"
          spy={true}
          smooth={true}
          duration={500}
          offset={-70}
          onClick={closeMenu}
        >
          <li>Certifications</li>
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
          offset={-70}
          onClick={closeMenu}
        >
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
