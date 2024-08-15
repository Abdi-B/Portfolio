import Image from "next/image";

const Hero = () => {
  return (
    <section id="Hero">
      <div className="hero-container">
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
            {/* I'm a software developer based in Addis Ababa, Ethiopia. I
            specialize in building (and occasionally designing) exceptional
            websites, applications, and everything in between. */}
            A <span> MERN </span> Full Stack Developer with a solid foundation in building and
            maintaining dynamic web applications. Proficient in MongoDB,
            Express.js, React.js, and Node.js, I bring a comprehensive skill set
            that spans both <span> front-end and back-end </span>  development. Driven by a
            passion for continuous learning and professional growth, I am
            committed to delivering high-quality, scalable solutions that meet
            client needs. Adaptable and self-motivated, I excel in both
            collaborative and remote work environments, consistently managing
            time and tasks to achieve project goals efficiently.
          </p>
          <div className="social-icons">
            <a
              href="https://twitter.com/olawanle_joel"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a
              href="https://github.com/olawanlejoel"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/olawanlejoel/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
