import styled, { keyframes } from "styled-components";

const upwards = keyframes`
  
  from {transform: translateY(-50%);}
  to {transform: translateY(-150%);}
`;

const Tech = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  width: 60px;
  height: 60px;

  margin-left: 15px;
  margin-bottom: 30px;

  cursor: pointer;

  .techName {
    opacity: 0;
    position: absolute;

    padding: 2px 4px;
    border: 2px solid black;
    border-radius: 5px;
  }

  &:hover .techName {
    opacity: 1;
    top: 0;
    transform: translateY(-150%);
    animation: ${upwards} 0.4s;
  }

  svg {
    width: 50px;
    height: 50px;
  }
`;

export default Tech;
