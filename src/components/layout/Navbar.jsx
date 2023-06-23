import styles from "../css/NavBar.css";

function NavBar() {
  
  const menuLinks = document.querySelectorAll('.nav-list a[href^="#"]');
  console.log(menuLinks);

  menuLinks.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });

  function getDistanceFromTheTop(element) {
    const id = element.getAttribute("href");
    return document.querySelector(id).offsetTop;
  }

  function nativeScroll(distanceFromTheTop) {
    window.scroll ({
      top: distanceFromTheTop, 
      behavior: "smooth"
    });
  }

  function scrollToSection(event) {
    event.preventDefault();
    const distanceFromTheTop = getDistanceFromTheTop(event.target) - 96;
    nativeScroll(distanceFromTheTop)
  }

  return (
    <div>
      <nav className="menu">
        <h1 className="logo">Natã Rodrigues</h1>
        <ul className="nav-list">
          <li>
            <a href="/">Início</a>
          </li>
          <li>
            <a href="#aboutme">Sobre</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projetos</a>
          </li>
          <li>
            <a href="#contact">Contato</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
