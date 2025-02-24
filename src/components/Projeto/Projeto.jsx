import React, { useEffect, useState } from 'react'
import "./styles.css";
import { Link } from "react-router-dom";

const Projeto = ({ class_projeto_img, projeto_img, projeto_img_desc, projeto_title, projeto_desc, projeto_linguagens, projeto_link }) => {
  const [animate, setAnimate] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalImageSrc, setModalImageSrc] = useState("")

  const handleImageClick = () => {
    setIsModalOpen(true), setModalImageSrc(projeto_img)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }


  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isModalOpen) {
        closeModal();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    }
  }, [isModalOpen])

  return (
    <>
      <div className="projeto">
        <div className="projeto__container-img">
          <img
            className={`projeto__img ${class_projeto_img || ""
              } ${animate ? "animate" : ""}`}
            src={projeto_img}
            alt={projeto_img_desc}
            title={projeto_img_desc}
            onClick={handleImageClick}
          />
        </div>

        <div className="projeto__container-info">
          <h3 className="projeto_container-info-title">
            {projeto_title}
          </h3>
          <p className="projeto_container-content-text">
            {projeto_desc}
          </p>
          <div className="projeto__container-logo-linguagens">
            {projeto_linguagens.map((linguagem, index) => (
              <img className="projeto__logo-linguagens" key={index} src={linguagem.src} alt={linguagem.desc} />
            ))}
          </div>
          <Link
            className="projeto__link"
            to={projeto_link}
            rel="noopener"
            target="_blank"
          >
            Ver Projeto
          </Link>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <span className="close" onClick={closeModal}>
            &times;
          </span>

          <div
            className="modal__container-img"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              className="modal__img"
              src={modalImageSrc}
              alt={projeto_img_desc}
              title={projeto_img_desc}
            />
          </div>
        </div>
      )}
    </>
  )
}

export default Projeto