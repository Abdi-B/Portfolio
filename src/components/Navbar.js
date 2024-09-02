import { useEffect, useRef, useState } from "react";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      closeMenu();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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

      <ul className={`hometocontact ${isMenuOpen ? "open" : ""}`} ref={menuRef}>
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
