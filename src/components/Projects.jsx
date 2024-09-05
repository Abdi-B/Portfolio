import { projectData } from './data.js';
import Image from "next/image";
const Projects = () => {
  return (
    <section id="projects">
      <div className="projects-container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projectData && projectData.map((project) => (
            <div className="project-card" key={project.id}>
              <div>
                <Image
           
                  src={project.img}
                  className="profile-img"
                  width={500}
                  height={300}
                  alt="screenshoot"
                  // loading="lazy"
                />
                </div>
              <div className="project-header">
                
                <i className="fa-regular fa-folder-open folder-icon"></i>
                <div className="small-icons">
                  <a href={project.gitHubLink} target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-github"></i>
                  </a>
                </div>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                <a href={project.gitHubLink} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
                <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
