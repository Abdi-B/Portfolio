const Skills = () => {
  return (
    <div className="skills-container">
      <h2>Technical Skills</h2>
      
      <h3>1) Front-end</h3>
      <div className="grid-skills">
        <div className="skill-card html">
          <i className="fa-brands fa-html5 html-icon"></i>
          <p>HTML</p>
        </div>
        <div className="skill-card css">
          <i className="fa-brands fa-css3-alt css-icon"></i>
          <p>CSS</p>
        </div>
        <div className="skill-card js">
          <i className="fa-brands fa-js js-icon"></i>
          <p>JavaScript</p>
        </div>
        <div className="skill-card ts">
          <i className="fa-brands fa-js ts-icon"></i>
          <p>TypeScript</p>
        </div>
        <div className="skill-card react">
          <i className="fa-brands fa-react react-icon"></i>
          <p>React</p>
        </div>
        <div className="skill-card redux">
          <i className="fa-brands fa-react redux-icon"></i>
          <p>Redux and Redux Toolkit</p>
        </div>
        <div className="skill-card materialui">
          <i className="fa-brands fa-react materialui-icon"></i>
          <p>Material UI</p>
        </div>
        <div className="skill-card tailwind">
          <i className="fa-brands fa-react tailwind-icon"></i>
          <p>Tailwind CSS</p>
        </div>
      </div>
      
      <h3>2) Back-end</h3>
      <div className="grid-skills">
        <div className="skill-card node">
          <i className="fa-brands fa-node-js node-icon"></i>
          <p>Node.js</p>
        </div>
        <div className="skill-card express">
          <i className="fa-brands fa-js express-icon"></i>
          <p>Express.js</p>
        </div>
        <div className="skill-card laravel">
          <i className="fa-brands fa-laravel laravel-icon"></i>
          <p>Laravel</p>
        </div>
      </div>
      
      <h3>3) Databases</h3>
      <div className="grid-skills">
        <div className="skill-card mongodb">
          <i className="fa-brands fa-mongodb mongodb-icon"></i>
          <p>MongoDB</p>
        </div>
        <div className="skill-card mysql">
          <i className="fa-brands fa-database mysql-icon"></i>
          <p>MySQL</p>
        </div>
        <div className="skill-card postgresql">
          <i className="fa-brands fa-database postgresql-icon"></i>
          <p>PostgreSQL</p>
        </div>
      </div>
      
      <h3>4) Tools and Others</h3>
      <div className="grid-skills">
        <div className="skill-card docker">
          <i className="fa-brands fa-docker docker-icon"></i>
          <p>Docker</p>
        </div>
        <div className="skill-card git">
          <i className="fa-brands fa-git-alt git-icon"></i>
          <p>Git and GitHub</p>
        </div>
        <div className="skill-card rest">
          <i className="fa-solid fa-network-wired rest-icon"></i>
          <p>REST APIs</p>
        </div>
        <div className="skill-card postman">
          <i className="fa-brands fa-pinterest postman-icon"></i>
          <p>Postman</p>
        </div>
        <div className="skill-card graphql">
          <i className="fa-solid fa-code graphql-icon"></i>
          <p>GraphQL</p>
        </div>
        <div className="skill-card webpack">
          <i className="fa-solid fa-box-open webpack-icon"></i>
          <p>Webpack</p>
        </div>
        <div className="skill-card babel">
          <i className="fa-solid fa-code babel-icon"></i>
          <p>Babel</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
