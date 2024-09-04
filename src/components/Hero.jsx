import Image from "next/image";
import { Link as ScrollLink  } from "react-scroll";


const Hero = () => {
  return (
    <section id="Hero">
      <div className="hero-container2">
        <div className="hero-profile">
          <Image
            // src="/images/profile.jpeg"
            src="/images/aiUser.jpg"
            className="profile-img"
            width={300}
            height={300}
            alt="Abdi's personal img"
            loading="lazy"
          />
          <h1>Hey, I'm Abdi 👋</h1>
          <div className="social-icons">
            <a
              href="mailto:abdibacha67@gmail.com" // Add your email here
              aria-label="Email"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-solid fa-envelope"></i>{" "}
              {/* Updated icon class */}
            </a>
            <a
              href="https://x.com/abdiibacha99?t=L3RD0h3UdQ6IrTuTy49zOg&s=09"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-twitter"></i>
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
              href="https://t.me/hopeab99"
              aria-label="Telegram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-telegram"></i>
            </a>
            <a
              href="https://Wa.me/+251967398828"
              aria-label="WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-whatsapp"></i>
            </a>
          </div>
          <div className="cta-button">
            {/* <a href="#contact" className="cta-link">
              Contact Me
            </a> */}
            <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            // spy={true}
            className="cta-link"
          >
            Contact Me
          </ScrollLink>
          </div>
        </div>

        <div className="hero-text">
          <p>
            I’m, a passionate Full Stack Developer dedicated to crafting
            dynamic, responsive web applications. With a solid foundation in
            both <span> front-end and back-end </span> technologies, I build
            seamless digital experiences that are not only visually engaging but
            also highly functional. From intuitive user interfaces to robust
            server-side logic, I’m committed to delivering high-quality,
            scalable solutions that meet the needs of modern web applications.
          </p>
          <div className="hero-img">
            <Image
              src="/images/mongodb.jpg"
              className="mongodb-img mern-img"
              width={150}
              height={100}
              alt="developer"
            />
            <Image
              src="/images/Exp4.png"
              className="express-img mern-img"
              width={100}
              height={100}
              alt="developer"
            />
            <Image
              src="/images/Reactjs2.png"
              className="react-img mern-img"
              width={100}
              height={100}
              alt="React.js logo representing front-end skills"
            />

            <Image
              src="/images/Nodejs.png"
              className="mern-img"
              width={100}
              height={100}
              alt="developer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
