import React from "react";
import "./styles.css";
import ParticlesComponent from "../../components/Particles/Particles";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <main>
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
            <Link
              className="hero__btn"
              to={
                "https://wa.me/62995132226?text=Ol%C3%A1%2C%20gostaria%20de%20realizar%20um%20or%C3%A7amento."
              }
              target="_blank"
              rel="noopener"
            >
              Fazer orçamento
            </Link>
          </div>
        </section>

        <section className="beneficios">
          <h2>Sua empresa precisa estar online!</h2>
        </section>
      </main>
    </>
  );
};

export default Home;
