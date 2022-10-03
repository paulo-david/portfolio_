import NavBarWrapper from "./styles";

const Navbar = () => {
  return (
    <NavBarWrapper>
      <h2>Paulo</h2>

      <nav>
        <a href="#Home">Home</a>
        <a href="#AboutMe">AboutMe</a>
        <a href="#Projects">Projects</a>
        <a href="#Contact">Contact</a>
      </nav>
    </NavBarWrapper>
  );
};

export default Navbar;
