import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="nav-container">
      <button className="menu-icon" onClick={toggleMenu}>
        ☰
      </button>
      <div className="logo">
        <ScrollLink to="projects" smooth={true} duration={500}>
          Abdi's Portfolio
        </ScrollLink>
      </div>

      <ul className={`hometocontact ${isMenuOpen ? "open" : ""}`}>
        <li className="list">
          <ScrollLink
            to="Hero"
            smooth={true}
            duration={500}
            onClick={closeMenu}
            activeClass="active"
            spy={true}
          >
            Home
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            onClick={closeMenu}
            activeClass="active"
            spy={true}
          >
            About
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="projects"
            smooth={true}
            duration={500}
            onClick={closeMenu}
            activeClass="active"
            spy={true}
          >
            Projects
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            onClick={closeMenu}
            activeClass="active"
            spy={true}
          >
            Contact
          </ScrollLink>
        </li>
      </ul>
      <a href="" className="cta-btn">
        Resume
      </a>
    </nav>
  );
};

export default Navbar;
