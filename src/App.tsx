import Navbar from "./components/NavBar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home></Home>
      <AboutMe></AboutMe>
      <Projects></Projects>
    </div>
  );
}

export default App;
