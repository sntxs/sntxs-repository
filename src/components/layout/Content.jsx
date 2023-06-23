import styles from "../css/Content.css";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Projects from "./Projects";
import Skills from "./Skills";
import Top from "./Top";

function Content() {
  return (
    <div className="base">
      <Top />

      <>
        <AboutMe />
      </>

      <>
        <Skills />
      </>

      <>
        <Projects />
      </>

      <>
        <Contact />
      </>
    </div>
  );
}

export default Content;
