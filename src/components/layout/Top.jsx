import styles from "../css/Top.css";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FaFileAlt } from "react-icons/fa";

function Top() {
  return (
    <div className="top">
      <h1>
        Olá, meu nome é <span>Natã Rodrigues</span>, <br />
        sou Desenvolvedor <span>WEB</span>.
      </h1>
      <div>
        <a href="https://github.com/sntxs">
          <BsGithub className="link" />
        </a>
        <a href="https://www.linkedin.com/in/sntsrod00/">
          <BsLinkedin className="link" />
        </a>
        <a href="https://drive.google.com/file/d/1ulqryklsUiEWFPVleh45Aej5O0mq479N/view?usp=drive_link">
          <FaFileAlt className="link" />
        </a>
      </div>
    </div>
  );
}

export default Top;
