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
            I'm a software developer based in Addis Ababa, Ethiopia. I
            specialize in building (and occasionally designing) exceptional
            websites, applications, and everything in between.
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
