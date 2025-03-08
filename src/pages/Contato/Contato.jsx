import React from "react";
import "./styles.css";

export class Contato extends React.Component {
  render() {
    return (
      <>
        <main className="contato_main">
          <section id="contato">
            <h2>Contato</h2>
            <form action="https://api.staticforms.xyz/submit" method="post">
              <label>Nome</label>
              <input
                required
                type="text"
                name="name"
                placeholder="Digite seu nome"
                autocomplete="off"
              />
              <label>Email</label>
              <input
                required
                type="email"
                name="email"
                placeholder="Digite seu email"
                autocomplete="on"
              />
              <label>Mensagem</label>
              <textarea
                name="message"
                cols="30"
                rows="10"
                placeholder="Digite sua mensagem"
              ></textarea>
              <button type="submit">Enviar</button>

              <input
                type="hidden"
                name="accessKey"
                value="01417344-2dc6-4a48-95e0-384f4d9d904d"
              />
              <input
                type="hidden"
                name="redirectTo"
                value="https://www.pauloadson.com.br"
              />
            </form>
          </section>
        </main>
      </>
    );
  }
}
