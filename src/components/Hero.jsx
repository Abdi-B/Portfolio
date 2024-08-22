import Image from "next/image";

const Hero = () => {
  return (
    <section id="Hero">
      <div className="hero1">
        <div className="hero-container2">
          <Image
            src="/images/profile.jpeg"
            className="profile-img"
            width={300}
            height={300}
            alt="Abdi's personal img"
          />
          <div className="hero-text">
            <h1>Hey, I'm Abdi 👋</h1>
            <p>
              A <span> MERN </span> Full Stack Developer with a solid foundation
              in building and maintaining dynamic web applications. Proficient
              in MongoDB, Express.js, React.js, and Node.js, I bring a
              comprehensive skill set that spans both{" "}
              <span> front-end and back-end </span> development. Driven by a
              passion for continuous learning and professional growth, I am
              committed to delivering high-quality, scalable solutions that meet
              client needs. Adaptable and self-motivated, I excel in both
              collaborative and remote work environments, consistently managing
              time and tasks to achieve project goals efficiently.
            </p>
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
                // href="https://github.com/olawanlejoel"
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
                // href="https://www.linkedin.com/in/olawanlejoel/"
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
        </div>
        {/* <div className="tech-icons">
          <i className="devicon-react-original colored"></i>
          <i className="devicon-nextjs-original colored"></i>
          <i className="devicon-express-original colored"></i>
          <i className="devicon-nodejs-plain colored"></i>
          <i className="devicon-mongodb-plain colored"></i>
        </div> */}

        <div className="hero-img">
          <Image
            src="/images/mongodb.jpg"
            className="mongodb-img mern-img"
            width={150}
            height={100}
            alt="developer" 
            
          />
          <Image 
            src="/images/Express3.png"
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

          {/* <FontAwesomeIcon icon="fa-brands fa-react" />
        <i class="fa-brands fa-react fa-spin"></i>
        <i class="fa-brands fa-node fa-fade"></i> */}

          {/* <Image
              src="/images/MERN.png"
              className="mern-img"
              width={500}
              height={500}
              alt="developer"
            /> */}
          {/* <Image
              src="/images/dev.jpg"
              className="home-img"
              width={500}
              height={500}
              alt="developer"
            />  */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
