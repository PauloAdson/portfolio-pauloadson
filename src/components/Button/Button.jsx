import PropTypes from 'prop-types';
import './styles.css';
import { Link } from 'react-router-dom';

const Button = ({ btnText, btnLink, target }) => {
  return (
    <Link
      className='portfolio__home-btn btn__style'
      to={btnLink}
      target={target}
      rel='noopener'
    >
      {btnText}
    </Link>
  );
};

Button.propTypes = {
  btnText: PropTypes.string.isRequired,
  btnLink: PropTypes.string.isRequired,
  target: PropTypes.string,
};

export default Button;
