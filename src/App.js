import portfolioImage from './Images/Portfolio_Photo.jpg';
import './App.css';

function App() {
  return (
    <>
      <header>
    <h1>Emily Morosoff — Full Stack Developer</h1>
    <nav id="navbar" class="sticky-navbar">
      <a href="#welcome-section">Welcome</a>
      <a href="#about-me">About Me</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </nav>
    </header>  
    <section id="welcome-section">
        <div className="image-div">
            <img
            src={portfolioImage}
            alt="Emily Morosoff"
            className="profile-image"
          />
        </div>
            <h2>Coding the Future!</h2>
    </section>

    <div className="main">
        <section id="about-me">
          <h2>ABOUT <br/>ME</h2>

          <p>
            • Proficient in both front-end and back-end web development.<br/>
            • Strong knowledge of programming languages including JavaScript, Python, and Java.<br/>
            • Experienced in building responsive and user-friendly web applications.<br/>
            • Skilled in using modern front-end libraries and frameworks like React, Angular, or Vue.js.<br/>
            • Proficient in server-side technologies such as Node.js, Express.js, and Flask.<br/>
            • Extensive experience with databases, including SQL (e.g., MySQL, PostgreSQL) and NoSQL (e.g., MongoDB) databases.<br/>
            • Well-versed in RESTful and GraphQL API development.<br/>
            • Familiar with version control systems like Git for efficient code collaboration.<br/>
            • Adept at troubleshooting and debugging to ensure smooth application performance.<br/>
          </p>          
        </section>

        <div className="main-bottom">
            <h2>PROJECTS</h2>
        <div className="project-tiles">
          <a className="project-tile-1" id="projects"   href="https://github.com/emilymorosoff/Horiseon-Accessible-Website"
          target="_blank">
          <div>
            <h3>Accessible-Website</h3>
            <p>HTML/CSS</p>
          </div>
          </a>
          <div className="project-tile">
            <a href="URL_TO_PROJECT2" target="_blank">
                <h3>LED Wall</h3>
                <p>NODE/Iot</p>
            </a>
            
          </div>
          <div className="project-tile">
            <p>Description, challenges, technologies, etc.</p>
            <a href="URL_TO_PROJECT3" target="_blank">View Project</a>
            <img src="image3.jpg" alt="Project 3" />
          </div>
          <div className="project-tile">
            <p>Description, challenges, technologies, etc.</p>
            <a href="URL_TO_PROJECT4" target="_blank">View Project</a>
            <img src="image4.jpg" alt="Project 4" />
          </div>
          <div className="project-tile">
            <p>Description, challenges, technologies, etc.</p>
            <a href="URL_TO_PROJECT5" target="_blank">View Project</a>
            <img src="image5.jpg" alt="Project 5" />
          </div>
      </div>
      </div>
    </div>

    <section id="contact">
      <h2>Contact Me</h2>
      <nav>
        <ul>
            <a href="https://github.com/emilymorosoff">
                My Github
            </a>
            <a href="https://wa.me/18583280942">
                My WhatsApp
            </a>
            <a href="https://www.linkedin.com/in/e-morosoff/">
                My LinkedIn
                </a>    
        </ul>
      </nav>
    </section>
    </>
  );
}

export default App;
