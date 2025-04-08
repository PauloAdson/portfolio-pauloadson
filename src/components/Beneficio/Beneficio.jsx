import PropTypes from 'prop-types';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Beneficio = ({ beneficioIcon, beneficioTitle, beneficioParag }) => {
  return (
    <>
      <div className='beneficio'>
        <FontAwesomeIcon className='beneficio__icon' icon={beneficioIcon} />
        <span className='beneficio__title uppercase'>{beneficioTitle}</span>
        <p className='beneficio__parag'>{beneficioParag}</p>
      </div>
    </>
  );
};

Beneficio.propTypes = {
  beneficioIcon: PropTypes.object.isRequired,
  beneficioTitle: PropTypes.string.isRequired,
  beneficioParag: PropTypes.string.isRequired,
};

export default Beneficio;
