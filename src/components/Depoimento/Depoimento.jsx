import PropTypes from 'prop-types'
import './styles.css'
import { Link } from 'react-router-dom'

const Depoimento = ({
  bgLogo,
  cliente,
  logoCliente,
  comentario,
  linkSiteCliete,
}) => {
  return (
    <>
      <div className="depoimento">
        <Link
          className={`depoimento__container-logo ${bgLogo}`}
          to={linkSiteCliete}
          target="_blank"
          rel="noopener"
        >
          <img
            className="depoimento__logo"
            src={logoCliente}
            alt={`Cliente: ${cliente}`}
            title={cliente}
          />
        </Link>
        <span className="depoimento__cliente">{cliente}</span>
        <p className="depoimento__comentario">{comentario}</p>
      </div>
    </>
  )
}

Depoimento.propTypes = {
  bgLogo: PropTypes.string.isRequired,
  cliente: PropTypes.string.isRequired,
  logoCliente: PropTypes.string.isRequired,
  comentario: PropTypes.string.isRequired,
  linkSiteCliete: PropTypes.string.isRequired,
}
export default Depoimento
