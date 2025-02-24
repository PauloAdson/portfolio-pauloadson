import React from "react";
import "./styles.css";
import Projetos from "../../components/Projetos/Projetos";
import logoHtml5 from "../../assets/images/logos-ferramentas/html5-logo.png";
import logoCss3 from "../../assets/images/logos-ferramentas/css3-logo.png";
import logoJavaScript from "../../assets/images/logos-ferramentas/javascript-logo.png";
import logoReact from "../../assets/images/logos-ferramentas/react-logo.png";
import logoLinkedin from "../../assets/images/logos-ferramentas/linkedin-logo.png";
import logoGitHub from "../../assets/images/logos-ferramentas/github-logo.png";
import pdfCurriculo from "../../assets/PauloAdson-Curriculo.pdf";
import fotoDePaulo from "../../assets/images/paulo-adson.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";


const Portfolio = () => {
  return (
    <>
      <main className="portfolio" id="portfolio">
        <section className="sobre" id="sobre">
          <div className="sobre__container">
            <img
              loading="lazy"
              className="sobre__foto"
              src={fotoDePaulo}
              alt="Foto de Paulo Adson"
              title="Paulo Adson"
            />
            <h1 className="sobre__title-bold">
              Paulo Adson <br />
              <span className="sobre__subtitle uppercase"> Desenvoldor Front-End</span>
            </h1>

            <div className="sobre__container-logos-linguagens">
              <img src={logoHtml5} alt="Logo HTML5" width="30px" />
              <img src={logoCss3} alt="Logo CSS3" width="30" />
              <img src={logoJavaScript} alt="Java Script" width="30px" />
              <img src={logoReact} alt="Java Script" height="32px" />
            </div>

            <div className="sobre__container-links-sociais">
              <Link
                to={"https://www.linkedin.com/in/paulo-adson/"}
                target="_blank"
                rel="noopener"
              >
                <img src={logoLinkedin} alt="logo-linkedin" width="42" />
              </Link>
              <Link
                to={"https://github.com/PauloAdson"}
                target="_blank"
                rel="noopener"
              >
                <img src={logoGitHub} alt="logo-github" width="42" />
              </Link>
            </div>
          </div>

          <div className="sobre__container-biografia">
            <h2 className="sobre__biografia-title uppercase">Sobre</h2>
            <p className="sobre__biografia-content">
              Sou um Desenvolvedor Front-End focado em criar interfaces
              funcionais e bem estruturadas. Minha abordagem une habilidades
              técnicas sólidas com um toque de criatividade, resultando em
              projetos envolventes e intuitivos. Estou constantemente em busca
              de novas oportunidades para aprimorar minhas habilidades e
              enfrentar desafios estimulantes. No momento, estou imerso nos
              estudos de React, buscando expandir meu conhecimento e
              contribuir para projetos inovadores.
            </p>
            <Link
              to={pdfCurriculo}
              className="sobre__curriculo"
              target="_blank"
              rel="noopener"
            >
              Meu Currículo
              <FontAwesomeIcon icon={faDownload} className="fa-download" />
            </Link>
          </div>
        </section>

        <Projetos />
      </main>
    </>
  )
}

export default Portfolio
