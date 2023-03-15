import NavBar from "./navbar";
import Body from "./body";
import Projects from "./projects";
import Contact from "./contact";
import Copyright from "./copyright";
function Portfolio() {
  return (
    <div>
      <NavBar />
     
      <Body />
      <Projects/>
      <Contact/>
      <Copyright/>
    </div>
  );
}

export default Portfolio;