import AboutMeWrapper from "./styles";

import { SiDocker, SiXbox, SiJava, SiDjango } from "react-icons/si";
import { DiProlog } from "react-icons/di";
import { GiJellyBeans } from "react-icons/gi";
import { RiMusic2Line } from "react-icons/ri";

const AboutMe = () => {
  return (
    <AboutMeWrapper>
      <h3 className="listTitle">Current learning:</h3>
      <ul>
        <li className="listItem">
          <SiJava />
          &nbsp; Java
        </li>
        <li className="listItem">
          <DiProlog />
          &nbsp; Prolog
        </li>
      </ul>

      <h3 className="listTitle">I&apos;m passionate about:</h3>

      <ul>
        <li className="listItem">
          <SiXbox />
          &nbsp; Gaming
        </li>

        <li className="listItem">
          <GiJellyBeans />
          &nbsp; Feijão tropeiro
        </li>

        <li className="listItem">
          <RiMusic2Line />
          &nbsp; Songs from{" "}
          <a
            href="https://www.youtube.com/c/ooo0eve0ooo"
            target="_blank"
            rel="noreferrer"
          >
            Eve
          </a>
          ,{" "}
          <a
            href="https://www.youtube.com/channel/UCEuOwB9vSL1oPKGNdONB4ig"
            target="_blank"
            rel="noreferrer"
          >
            RHCP
          </a>{" "}
          and{" "}
          <a
            href="https://www.youtube.com/channel/UCT9zcQNlyht7fRlcjmflRSA"
            target="_blank"
            rel="noreferrer"
          >
            Imagine Dragons
          </a>
        </li>
      </ul>
    </AboutMeWrapper>
  );
};

export default AboutMe;
