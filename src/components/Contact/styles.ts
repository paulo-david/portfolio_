import styled from "styled-components";

const Contact = styled.div`
  color: white;
  background-color: #404040;
  border-bottom: 3px solid #1d1d1d;

  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    font-size: 20px;
  }

  #contact_list {
    width: 30%;
    padding: 0;
    li {
      list-style: none;
      margin-bottom: 50px;
      svg {
        width: 50px;
        height: 50px;
      }
      .info {
        a {
          color: beige;
        }
      }
    }
  }
`;

export default Contact;
