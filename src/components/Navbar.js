import { useEffect, useRef, useState } from "react";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  // const toggleMenu = (event) => {
  //   event.stopPropagation(); // Stop propagation to prevent conflicting events
  //   setIsMenuOpen((prev) => !prev);
  // };

  const closeMenu = () => {
    setIsMenuOpen(false); // This closes the menu when called
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      closeMenu(); // Closes the menu if clicking outside of it
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
      {/* Conditionally render hamburger or X icon based on isMenuOpen */}
      <button className="menu-icon" onClick={toggleMenu}>
        {isMenuOpen ? "✖" : "☰"}
      </button>

      <div className="logo">
        <ScrollLink to="projects" smooth={true} duration={500}>
          Abdi's Portfolio
        </ScrollLink>
      </div>

      {/* Apply 'open' class to make menu visible when isMenuOpen is true */}
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
