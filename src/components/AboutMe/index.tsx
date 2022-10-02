import { userData } from "../../utils/userData";
import AboutMeWrapper from "./styles";

function AboutMe() {
  return (
    <AboutMeWrapper>
      <div className="intro">
        <img
          src={`https://github.com/${userData.githubUser}.png`}
          alt="Paulo david, the owner of the portfolio"
        />
				<p>Hello, my name is Paulo David</p>
      </div>
    </AboutMeWrapper>
  );
}

export default AboutMe;
