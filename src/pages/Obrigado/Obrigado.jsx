import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

export class Obrigado extends React.Component {
  render() {
    return (
      <main className="obrigado_main">
        <div className="content-obrigado">
          <h1 className="h1-obrigado">Obrigado pelo contato!</h1>
          <p className="p-obrigado">Em breve estarei respondendo</p>
          <Link className="btn-voltar-ao-inicio" to={"./"}>
            Voltar ao ínicio
          </Link>
        </div>
      </main>
    );
  }
}
