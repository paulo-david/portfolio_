import styled from "styled-components";

const Projects = styled.section`
  .project {
    .projectInfo {

      display: flex;
      justify-content: space-around;
      align-items: center;
      
      img {
        width: 50%;
      }

      .links {

        display: flex;
        flex-direction: column;
        
        a{
          color: inherit;
          text-decoration: none;

          padding: 4px 8px;

          border: 2px solid black;
          border-radius: 5px;

          margin: 20px 0;

          transition: 400ms;
          &:hover{
            color: white;
            background-color: black;
          }
        }
      }
    }
  }
`;

export default Projects;
