import styled from "styled-components";

const NavBar = styled.div`
  color: white;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  z-index: 99999;
  width: calc(100% - 100px);

  padding: 0 50px;
  background-color: #404040;
  border-bottom: 3px solid brown;

  nav {
    width: 220px;
    display: flex;
    justify-content: space-between;

    a {
      color: inherit;
      text-decoration: none;
      font-weight: 800;
      letter-spacing: 0.5px;

      transition: 300ms;

      &hover {
        border-bottom: 2px solid black;
      }
    }
  }
`;

export default NavBar;
