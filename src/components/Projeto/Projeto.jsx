import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
export class Projeto extends React.Component {
  constructor() {
    super();
    this.state = {
      animate: false,
      isModalOpen: false,
      modalImageSrc: "",
    };
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    if (event.key === "Escape" && this.state.isModalOpen) {
      this.closeModal();
    }
  };

  handleImageClick = () => {
    this.setState({ animate: true });

    setTimeout(() => {
      this.setState({ animate: false });
    }, 3600);

    this.setState({
      isModalOpen: true,
      modalImageSrc: this.props.projeto_img,
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  render() {
    return (
      <>
        <div className="projeto">
          <div className="projeto__container-img">
            <img
              className={`projeto__img ${this.props.class_projeto_img || ""
                } ${this.state.animate ? "animate" : ""}`}
              src={this.props.projeto_img}
              alt={this.props.projeto_img_desc}
              title={this.props.projeto_img_desc}
              onClick={this.handleImageClick}
            />
          </div>

          <div className="projeto__container-info">
            <h3 className="projeto_container-info-title">
              {this.props.projeto_title}
            </h3>
            <p className="projeto_container-content-text">
              {this.props.projeto_desc}
            </p>
            <div className="projeto__container-logo-linguagens">
              {this.props.projeto_linguagens.map((linguagem, index) => (
                <img className="projeto__logo-linguagens" key={index} src={linguagem.src} alt={linguagem.desc} />
              ))}
            </div>
            <Link
              className="projeto__link"
              to={this.props.projeto_link}
              rel="noopener"
              target="_blank"
            >
              Ver Projeto
            </Link>
          </div>
        </div>

        {this.state.isModalOpen && (
          <div className="modal" onClick={this.closeModal}>
            <span className="close" onClick={this.closeModal}>
              &times;
            </span>

            <div
              className="modal__container-img"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                className="modal__img"
                src={this.state.modalImageSrc}
                alt={this.props.projeto_img_desc}
                title={this.props.projeto_img_desc}
              />
            </div>
          </div>
        )}
      </>
    );
  }
}
