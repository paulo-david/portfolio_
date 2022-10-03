import { stackData } from "../../utils/stackData";
import { userData } from "../../utils/userData";
import Tech from "../Tech";
import HomeWrapper from "./styles";

function Home() {
  return (
    <HomeWrapper id="Home">
      <div id="intro">
        <img
          src={`https://github.com/${userData.githubUser}.png`}
          alt="Paulo david, the owner of the portfolio"
        />
        <h1>Hello, my name is {userData.nameUser}</h1>
      </div>

      <div id="description">
        <h2>
          I love cracking <span>puzzles</span> and <span>coding</span>
        </h2>
        <h3>Discover here my projects and technologies I know</h3>
      </div>

      <div id="links">
        <a href="#projects">See projects</a>
        <a href={`https://github.com/${userData.githubUser}/portfolio_`}>
          See portfolio source code
        </a>
        <a href={`https://github.com/${userData.githubUser}/`}>
          See github profile
        </a>
      </div>

      <section id="technologies">
        {stackData.map((stack, idx) => (
          <Tech key={idx} title={stack.title} icon={stack.img}></Tech>
        ))}
      </section>
    </HomeWrapper>
  );
}

export default Home;
