import Image from "next/image";

const About = () => {
  return (
    <section id="about">
      <div className="about-container">
        <h2>About Me</h2>
        <p>
          As a proficient MERN full-stack developer, I am committed to crafting
          robust and scalable web applications that meet the highest standards
          of performance and security. My expertise spans across both front-end
          and back-end development, ensuring seamless integration and
          functionality. I am adept at working in collaborative environments,
          driving projects from concept to deployment with a focus on innovation
          and efficiency.
        </p>
        <div className="flex-about">
          <div className="about-text">
            <div className="competency">
              <h3>Key Competencies:</h3>
              <p>
                {" "}
                <span>Full-Stack Development: </span> Build and maintain
                full-stack web applications using the MERN stack.
              </p>
              <p>
                {" "}
                <span>Team Collaboration: </span> Work closely with
                cross-functional teams to define, design, and deliver new
                features.
              </p>
              <p>
                {" "}
                <span>API Implementation: </span> Develop and integrate RESTful
                APIs with front-end components.
              </p>
              <p>
                {" "}
                <span>Code Quality:</span> Write clean, scalable code with
                comprehensive documentation.
              </p>
              <p>
                {" "}
                <span>Optimization: </span> Optimize applications for maximum
                speed and scalability.
              </p>
              <p>
                {" "}
                <span>Code Review & Debugging: </span> Conduct thorough code
                reviews, testing, and debugging.
              </p>
              <p>
                {" "}
                <span>Security: </span> Implement robust authentication,
                authorization, and error handling practices.
              </p>
              <p>
                {" "}
                <span>Load Balancing: </span> Utilize load balancers to enhance
                application performance.
              </p>
              <p>
                {" "}
                <span>Middleware: </span> Integrate middleware for added
                functionality and control.
              </p>
              <p>
                {" "}
                <span>Validation & Routing: </span> Ensure proper validation and
                efficient routing mechanisms.
              </p>
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
