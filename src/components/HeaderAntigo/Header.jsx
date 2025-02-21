import React from "react";
import "./styles.css";
import "../../index.css";
import logo from "/pauloadson-logo-longa.png";

export class Header extends React.Component {
  constructor() {
    super();
    this.state = { active: false };
  }

  toggleClass = () => {
    this.setState({ active: !this.state.active });
  };

  closeMenu = () => {
    this.setState({ active: false });
  };

  render() {
    const { active } = this.state;
    return (
      <>
        <header className="menu-principal">
          <nav>
            <a href="./">
              <img className="img-logo" src={logo} alt="Logo Paulo Adson" />
            </a>

            <div
              onClick={this.toggleClass}
              className={active ? "mobile-menu active" : "mobile-menu"}
            >
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
            </div>

            <ul
              className={
                active ? "nav-list uppercase active" : "nav-list uppercase"
              }
            >
              <li>
                <a onClick={this.closeMenu} className="menu-links" href="./">
                  Início
                </a>
              </li>
              <li>
                <a
                  onClick={this.closeMenu}
                  className="menu-links"
                  href="/portfolio"
                >
                  Portfólio
                </a>
              </li>
              <li>
                <a
                  onClick={this.closeMenu}
                  className="menu-links"
                  href="/portfolio/#sobre"
                >
                  Sobre
                </a>
              </li>
              {/* <li><a onClick={this.closeMenu} className="menu-links" href="/certificados">Certificados</a></li> */}
              <li>
                <a
                  onClick={this.closeMenu}
                  className="menu-links"
                  href="/contato"
                >
                  Contato
                </a>
              </li>
            </ul>
          </nav>
        </header>
      </>
    );
  }
}
