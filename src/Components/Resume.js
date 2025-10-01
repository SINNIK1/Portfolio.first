import { Slide } from "react-reveal";
import AOS from "aos";
import "aos/dist/aos.css";

const Resume = ({ data }) => {
  AOS.init();

  if (!data) {
    return null;
  }

  const { education, work} = data;

  const renderEducation = () => {
    if (!education || education.length === 0) {
      return null;
    }

    return education.map((educationItem) => (
      <div key={educationItem.school}>
        <h3>{educationItem.school}</h3>
        <p className="info">
          {educationItem.degree} <span>&bull;</span>
          <em className="date">{educationItem.graduated}</em>
        </p>
      </div>
    ));
  };

  const renderWork = () => {
    if (!work || work.length === 0) {
      return null;
    }

    return work.map((workItem) => (
      <div key={workItem.company}>
        <h3>{workItem.company}</h3>
        <p className="info">
          {workItem.title}
          <span>&bull;</span> <em className="date">{workItem.years}</em>
        </p>
        <p>{workItem.description}</p>
      </div>
    ));
  };
  return (

    <section id="resume">
      <Slide left duration={1000}>
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div
            className="nine columns main-col"
            data-aos="fade-down-left"
            data-aos-delay="200"
            data-aos-duration="900"
          >
            <div className="row item">
              <div className="twelve columns">{renderEducation()}</div>
            </div>
          </div>
        </div>
      </Slide>

      <Slide left duration={1300}>
        <div
          className="row work"
          data-aos="fade-down-right"
          data-aos-delay="200"
          data-aos-duration="900"
        >
          <div className="three columns header-col">
            <h1>
              <span>Experiences</span>
            </h1>
          </div>

          <div className="nine columns main-col">{renderWork()}</div>
        </div>
      </Slide>

      <Slide left duration={1300}>
        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Tech In Hand</span>
            </h1>
          </div>
          <div class="bars-container">

          <div class="bars">
            <h3>Languages</h3>
            <ul class="two-column-list">
              <li>C++</li>
              <li>Java</li>
              <li>JavaScript</li>
              <li>SQL</li> 
              <li>HTML</li>
              
            </ul>
            <div class="progress-bar">
              <div class="progress progress-70"></div>
            </div>
          </div>

          <div class="bars">
            <h3>Frameworks</h3>
            <ul class="two-column-list">
              <li>React</li>
              <li>Next</li>
              <li>Express</li>
              <li>Node</li> 
              <li>Spring Boot</li>
            </ul>            
            <div class="progress-bar">
              <div class="progress progress-85"></div>
            </div>
          </div>

          <div class="bars">
            <h3>Database Systems</h3>
            <ul class="two-column-list">
              <li>MySQL</li>
              <li>MongoDB</li>
              <li>PostgreSQL</li>
              <li>MSExcel</li> 
            </ul>            
            <div class="progress-bar">
              <div class="progress progress-90"></div>
            </div>
          </div>


          <div class="bars">
            <h3>Tools</h3>
            <ul class="two-column-list">
              <li>VSCode</li>
              <li>GitHub</li>
              <li>Git</li>
              <li>DBeaver</li> 
              <li>Postman</li>
              <li>Linux/Unix</li>
            </ul>            
            <div class="progress-bar">
              <div class="progress progress-85"></div>
            </div>
          </div>
          </div>                    
        </div>
      </Slide>
    </section>
  );
};

export default Resume;
