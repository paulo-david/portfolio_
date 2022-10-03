import ProjectsWrapper from "./styles";
import { projectsData } from "../../utils/projectsData";

import { BsGithub } from "react-icons/bs";

const Projects = () => {
  return (
    <ProjectsWrapper>
      {projectsData.map((project, idx) => (
        <div className="project" key={idx}>
          <h3 className="projectTitle">{project.title}</h3>
          <p className="projectDescription">{project.description}</p>

          <div className="projectInfo">
            <img src={project.img} alt={project.title} />
            <div className="links">
              <a href={project.source}>
                <BsGithub></BsGithub>
                &nbsp;
                source code
              </a>
              {project.deploy_link ? (
                <a href={project.deploy_link}>publication link</a>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      ))}
    </ProjectsWrapper>
  );
};

export default Projects;
