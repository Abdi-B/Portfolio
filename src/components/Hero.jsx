import Image from "next/image";

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
          />
          <h1>Hey, I'm Abdi 👋</h1>
          <div className="social-icons">
            <a
              // href="https://twitter.com/olawanle_joel"
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
              // href="https://www.linkedin.com/in/olawanlejoel/"
              aria-label="WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-whatsapp"></i>
            </a>
          </div>
        </div>

        <div className="hero-text">
          {/* <p>
            A <span> MERN </span> Full Stack Developer with a solid foundation
            in building and maintaining dynamic web applications. Proficient in
            MongoDB, Express.js, React.js, and Node.js.I bring a comprehensive
            skill set that spans both <span> front-end and back-end </span>{" "}
            development. Driven by a passion for continuous learning and
            professional growth, I am committed to delivering high-quality,
            scalable solutions that meet client needs. Adaptable and
            self-motivated, I excel in both collaborative and remote work
            environments, consistently managing time and tasks to achieve
            project goals efficiently.
          </p> */}
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
              alt="developer"
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
