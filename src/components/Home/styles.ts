import styled from "styled-components";

const Home = styled.div`
  #intro {
    display: flex;
    img {
      height: 100px;
      width: 100px;

      border-radius: 50%;
    }
    h1 {
    }
  }

  #description {
    span {
      color: blueviolet;
    }
  }

  #links {

    width: 80%;

    display: flex;
    justify-content: space-around;

    a {
      color: inherit;
      text-decoration: none;
      text-align: center;

      height: 20px;
      padding: 10px 10px;

      border: 2px solid black;
      border-radius: 5px;

      margin-bottom: 10px;

      transition: 0.5s;

      &:hover{
        color: white;
        background-color: black;
      }
    }

    @media(max-width:600px){

      margin: 0 auto;
      flex-direction: column;
    }
  }
`;

export default Home;
