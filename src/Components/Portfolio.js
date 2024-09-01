import { Slide } from "react-reveal";

const Portfolio = ({ data }) => {
  if (!data || !data.projects || data.projects.length === 0) {
    return null;
  }

  const renderProjects = data.projects.map((project) => {
    const projectImage = `images/portfolio/${project.image}`;

    return (
      <div key={project.title} className="columns portfolio-item">
        <div
          className="item-wrap"
          data-aos="zoom-in"
          data-aos-delay="200"
          data-aos-duration="900"
        >
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            title={project.title}
          >
            <img alt={project.title} src={projectImage} />
            <div className="overlay">
              <div className="portfolio-item-meta">
                <h5>{project.title}</h5>
                <p>{project.category}</p>
              </div>
            </div>
            <div className="link-icon">
              <i className="fa fa-link"></i>
            </div>
          </a>
        </div>
      </div>
    );
  });

  return (
    <section id="portfolio">
      <Slide left duration={1300}>
        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Projects</span>
            </h1>
          </div>
          <div class="bars-container">

              {renderProjects}
         
          </div>                    
        </div>
      </Slide>
    </section>
  );
};

export default Portfolio;
