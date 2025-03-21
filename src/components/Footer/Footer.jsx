import './styles.css'
import logo from '/pauloadson-logo-longa.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer>
        <nav className="footer_nav">
          <div className="footer_nav-links-sociais">
            <div className="logo">
              <Link to={'./'}>
                <img
                  className="img-logo"
                  src={logo}
                  alt="Logo Paulo Adson"
                  title="Paulo Adson Desenvolvedor"
                />
              </Link>
              {/* <a className="logo-name uppercase" href="/">Paulo Adson | Desenvolvedor Front-End</a> */}
            </div>

            <ul className="lista-links-sociais">
              <Link
                to={'https://www.linkedin.com/in/paulo-adson'}
                target="_blank"
                rel="noopener"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </Link>

              <Link
                to={'https://www.instagram.com/oluap_dev/'}
                target="_blank"
                rel="noopener"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </Link>

              <Link
                to={
                  'https://www.facebook.com/people/Paulo-Adson-Desenvolvedor/61573050770072/'
                }
                target="_blank"
                rel="noopener"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </Link>
            </ul>
          </div>

          <ul className="footer_links-container">
            <h4 className="footer_nav-titulo">Links rápidos</h4>
            <li>
              <Link to={'/#inicio'} className="footer_link" rel="noopener">
                Início
              </Link>
            </li>
            <li>
              <Link
                to={'/portfolio/#projetos'}
                className="footer_link"
                rel="noopener"
              >
                Portfólio
              </Link>
            </li>
            <li>
              <Link
                to={'/portfolio/#sobre'}
                className="footer_link"
                rel="noopener"
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link to={'/contato'} className="footer_link" rel="noopener">
                Contato
              </Link>
            </li>
          </ul>

          <ul className="footer_links-container">
            <h4 className="footer_nav-titulo">Contatos</h4>
            <li>
              <Link
                to={
                  'https://wa.me/62995132226?text=Ol%C3%A1%2C%20gostaria%20de%20realizar%20um%20or%C3%A7amento.'
                }
                target="_blank"
                rel="noopener"
                className="footer_link"
              >
                Celular: (62) 99513-2226
              </Link>
            </li>
            <li>
              <Link
                to={'mailto:paulo.alves200581@gmail.com'}
                target="_blank"
                rel="noopener"
                className="footer_link"
              >
                E-mail: paulo.alves200581@gmail.com
              </Link>
            </li>
            <li>
              <Link
                to={
                  'https://www.google.com/maps/place/Abadia+de+Goi%C3%A1s,+GO,+75345-000/@-16.789487,-49.4357483,13.75z/data=!4m15!1m8!3m7!1s0x935e599a5a9fa6bb:0xc79231dc803d5b28!2sAbadia+de+Goi%C3%A1s,+GO,+75345-000!3b1!8m2!3d-16.763996!4d-49.4352476!16zL20vMGJ3Y2dn!3m5!1s0x935e599a5a9fa6bb:0xc79231dc803d5b28!8m2!3d-16.763996!4d-49.4352476!16zL20vMGJ3Y2dn?entry=ttu&g_ep=EgoyMDI0MTExMS4wIKXMDSoASAFQAw%3D%3D'
                }
                target="_blank"
                rel="noopener"
                className="footer_link"
              >
                Cidade: Abadia de Goiás
              </Link>
            </li>
          </ul>
        </nav>
      </footer>
      <div className="footer_copyright">
        <p>
          Desenvolvido por <a href="/">Paulo Adson</a>
        </p>
      </div>
    </>
  )
}

export default Footer
