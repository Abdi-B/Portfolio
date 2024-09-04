import Image from "next/image";

const About = () => {
  return (
    <section id="about">
      <div className="about-container">
        <h2>About Me</h2>
        <p>
          As a proficient Full-stack Developer, I am committed to crafting
          robust and scalable web applications that meet the highest standards
          of performance and security. My expertise spans across both front-end
          and back-end development, ensuring seamless integration and
          functionality. I am adept at working in collaborative environments,
          driving projects from concept to deployment with a focus on innovation
          and efficiency.
        </p>
        <div className="flex-about">
          <div className="about-text">
             <h3>Key Competencies</h3>
            <div className="competency">
              <h5>Front-end Development </h5>
              <h5>Back-end Development </h5>
              <h5>Authentication and Authorization </h5>
              <h5>API Implementation </h5>
              {/* <h5>Core Back-end Responsibilities </h5> */}
              {/* <h5>Routing, Middleware and Validation </h5> */}
              <h5>Code Quality and Reliability </h5>
              {/* <h5>Code Review, Debugging and Testing </h5> */}
              {/* <h5>Code Quality </h5> */}
              {/* <h5>Error Handling</h5> */}
              
              <h5>Scalability </h5>
              {/* <h5>Team Collaboration </h5> */}
              <h5>Security </h5>
              {/* <h5> Optimization</h5> */}
              <h5>Database Modeling</h5>
              <h5>DevOps</h5>
              <h5>Containerization</h5>
              <h5>UI/UX Design</h5>
            </div>
          </div>
          {/* <div className="about-img">
            <Image
              src="/images/dev.jpg"
              className="profile-img"
              width={500}
              height={500}
              alt="developer"
            />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default About;
