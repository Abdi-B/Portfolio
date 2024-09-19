const Footer = () => {
  return (
    <>
      <hr />
      <div className="footer-container">
        <p>© {new Date().getFullYear()} Abdi Bacha's Portfolio</p>
        <div className="social_icons">
          <a
            href="https://github.com/Abdi-B"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            // href="https://www.linkedin.com/in/olawanlejoel/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="https://join.skype.com/invite/O8dYUnRViYh2"
            aria-label="Skype"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-skype"></i>
          </a>
          <a
            href="https://t.me/hopeab99"
            aria-label="Telegram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-telegram"></i>
          </a>
          {/* <a
              href="https://x.com/abdiibacha99?t=L3RD0h3UdQ6IrTuTy49zOg&s=09"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
              >
              <i className="fa-brands fa-twitter"></i>
            </a> */}
        </div>
      </div>
    </>
  );
};

export default Footer;
