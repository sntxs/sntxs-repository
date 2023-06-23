import styles from "../css/Skills.css";
import { AiFillHtml5 } from "react-icons/ai";
import { SiCss3, SiJavascript } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";

function Skills() {
  return (
    <div className="skills_cont">
      <section id="skills">
        <h1>SKILLS</h1>

        <a>
          <AiFillHtml5 size={55} />
        </a>
        <a>
          <SiCss3 size={55} />
        </a>
        <a>
          <GrReactjs size={55} />
        </a>
        <a>
          <SiJavascript size={55} />
        </a>
      </section>
    </div>
  );
}

export default Skills;
