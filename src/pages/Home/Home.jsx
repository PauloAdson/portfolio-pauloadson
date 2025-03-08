import React from "react";
import "./styles.css";
import ParticlesComponent from "../../components/Particles/Particles";
import Beneficio from "../../components/Beneficio/Beneficio";
import Button from "../../components/Button/Button";
import CarrosselDepoimentos from "../../components/CarrosselDepoimentos/CarrosselDepoimentos";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileScreenButton } from "@fortawesome/free-solid-svg-icons/faMobileScreenButton";
import { faGaugeHigh } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faCropSimple } from "@fortawesome/free-solid-svg-icons";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import Projeto from "../../components/Projeto/Projeto";
import html5Logo from "../../assets/images/logos-ferramentas/html5-logo.png";
import css3Logo from "../../assets/images/logos-ferramentas/css3-logo.png";
import figmaLogo from "../../assets/images/logos-ferramentas/figma-logo.png";
import javascriptLogo from "../../assets/images/logos-ferramentas/javascript-logo.png";
import mongodbLogo from "../../assets/images/logos-ferramentas/mongodb-logo.png";
import mysqlLogo from "../../assets/images/logos-ferramentas/mysql-logo.png";
import nodejsLogo from "../../assets/images/logos-ferramentas/nodejs-logo.png";
import phpLogo from "../../assets/images/logos-ferramentas/php-logo.png";
import reactLogo from "../../assets/images/logos-ferramentas/react-logo.png";

const Home = () => {
  return (
    <>
      <main className="home" id="inicio">
        <section className="hero">
          <ParticlesComponent id="particles" />
          <div className="hero__content-container">
            <div className="hero__container-title">
              <h1 className="hero__title">
                Destaque seu negócio com um site profissional!
              </h1>
              <h2 className="hero__subtitle">
                Crie um site moderno, responsivo e otimizado para atrair mais
                clientes e expandir sua presença online.
              </h2>
            </div>
            <Button
              btnText={"Fazer orçamento"}
              btnLink={
                "https://wa.me/62995132226?text=Ol%C3%A1%2C%20gostaria%20de%20realizar%20um%20or%C3%A7amento."
              }
              target={"_blank"}
            />
          </div>
        </section>

        <section className="beneficios">
          <h2 className="beneficios__title uppercase">
            Sua empresa precisa estar online!
          </h2>
          <div className="beneficios__container">
            <Beneficio
              beneficioIcon={faMobileScreenButton}
              beneficioTitle={"100% Responsivo"}
              beneficioParag={"Funciona perfeitamente em qualquer dispositivo."}
            />

            <Beneficio
              beneficioIcon={faGaugeHigh}
              beneficioTitle={"Carregamento rápido"}
              beneficioParag={"Sites otimizados para melhor performance."}
            />

            <Beneficio
              beneficioIcon={faMagnifyingGlass}
              beneficioTitle={"SEO otimizado"}
              beneficioParag={
                "Sites otimizados para mecanismos de busca ajudam seu negócio a ser encontrado mais facilmente."
              }
            />

            <Beneficio
              beneficioIcon={faCropSimple}
              beneficioTitle={"Design moderno"}
              beneficioParag={
                "Visual profissional e exclusivo para seu negócio."
              }
            />

            <Beneficio
              beneficioIcon={faChartLine}
              beneficioTitle={"Conversão"}
              beneficioParag={
                "Transforme visitantes em clientes com um site eficiente."
              }
            />
          </div>
          <Button
            btnText={"Fazer orçamento"}
            btnLink={
              "https://wa.me/62995132226?text=Ol%C3%A1%2C%20gostaria%20de%20realizar%20um%20or%C3%A7amento."
            }
            target={"_blank"}
          />
        </section>

        <section className="portfolio__home">
          <div className="portfolio__container-title">
            <h2 className="portfolio__title uppercase">
              Alguns dos sites que já desenvolvi
            </h2>
            <span className="projetos__subtitle">
              Clique na imagem para ver o projeto completo!
            </span>
          </div>

          <div className="projetos__container-projetos">
            <Projeto
              class_projeto_img="azevedo-advocacia"
              projeto_img={
                "https://raw.githubusercontent.com/PauloAdson/portfolio/refs/heads/main/src/assets/images/projetos-bg/azevedo-avocacia.png"
              }
              projeto_img_desc="Imagem da Página Azevedo Advocia e Consultoria Jurídica"
              projeto_title="Azevedo Advocia e Consultoria Jurídica"
              projeto_desc="Página institucional para Azevedo Advocacia e Consultoria Jurídica, desenvolvida com WordPress, HTML5 e CSS. Conta com um blog para artigos e uma estrutura visual projetada no Figma, garantindo uma navegação intuitiva e uma imagem profissional."
              projeto_linguagens={[
                {
                  src: html5Logo,
                  desc: "Logo HTML5",
                },
                {
                  src: css3Logo,
                  desc: "Logo CSS3",
                },
                {
                  src: figmaLogo,
                  desc: "Logo Figma",
                },
              ]}
              projeto_link="https://asazevedo.adv.br/"
            />

            <Projeto
              class_projeto_img="furlan-solucoes"
              projeto_img={
                "https://raw.githubusercontent.com/PauloAdson/portfolio/refs/heads/main/src/assets/images/site-furlan-desktop.png"
              }
              projeto_img_desc="Imagem da Página Furlan Soluções Financeiras"
              projeto_title="Furlan Soluções Financeiras"
              projeto_desc="Desenvolvi o site utilizando HTML, CSS, Wordpress por preferência do cliente,começando pelo protótipo no Figma."
              projeto_linguagens={[
                {
                  src: html5Logo,
                  desc: "Logo HTML5",
                },
                {
                  src: css3Logo,
                  desc: "Logo CSS3",
                },
                {
                  src: figmaLogo,
                  desc: "Logo Figma",
                },
              ]}
              projeto_link="https://furlansolucoesfinanceiras.com.br/"
            />

            <Projeto
              class_projeto_img="maratona-vocal"
              projeto_img={
                "https://raw.githubusercontent.com/PauloAdson/portfolio/refs/heads/main/src/assets/images/projetos-bg/maratonavocal.png"
              }
              projeto_img_desc="Imagem página de vendas Maratona Vocal"
              projeto_title="Página de Vendas | Maratona Vocal"
              projeto_desc="Uma página de vendas online para a Maratona Vocal. Desenvolvida com React, garantindo alta performance e interatividade para uma navegação fluida e envolvente."
              projeto_linguagens={[
                {
                  src: reactLogo,
                  desc: "Logo React",
                },
                {
                  src: html5Logo,
                  desc: "Logo HTML5",
                },
                {
                  src: css3Logo,
                  desc: "Logo CSS3",
                },
              ]}
              projeto_link="https://maratonavocal.vercel.app/"
            />
          </div>
          <Button
            btnText={"ver portfólio"}
            btnLink={"/portfolio/#projetos"}
            target={"_self"}
          />
        </section>

        <section className="depoimentos">
          <div className="depoimentos__container-title">
            <h2 className="depoimentos__title uppercase">
              O que dizem sobre meu trabalho
            </h2>
            <span className="depoimentos__subtitle">
              Veja o que meus clientes dizem sobre os sites que desenvolvi:
            </span>
          </div>

          <CarrosselDepoimentos />
        </section>
      </main>
    </>
  );
};

export default Home;
