import { useEffect, useRef, useState } from "react";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const menuButtonRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleClickOutside = (event) => {
    // If the click is outside both the menu and the button, close the menu
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      menuButtonRef.current &&
      !menuButtonRef.current.contains(event.target)
    ) {
      closeMenu();
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Cleanup event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <nav className="nav-container">
      {/* Conditionally render hamburger or X icon based on isMenuOpen */}
      <button className="menu-icon" onClick={toggleMenu} ref={menuButtonRef}>
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
      <a href="/Resume.pdf" className="cta-btn" download>
         Resume
      </a>
    </nav>
  );
};

export default Navbar;
