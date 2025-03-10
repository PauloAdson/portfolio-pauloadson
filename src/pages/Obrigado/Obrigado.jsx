// import { Link } from "react-router-dom";
import React from "react";
import "./styles.css";

const Obrigado = () => {
  return (
    <main className="obrigado_main">
      <div className="content-obrigado">
        <h1 className="h1-obrigado">Obrigado pelo contato!</h1>
        <p className="p-obrigado">Em breve estarei respondendo</p>
        <a className="btn-voltar-ao-inicio" href="/">
          Voltar ao ínicio
        </a>
      </div>
    </main>
  );
};

export default Obrigado;
