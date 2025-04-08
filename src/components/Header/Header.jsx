import { useState } from 'react';
import './styles.css';
import '../../index.css';
import logo from '/pauloadson-logo-longa.png';
import { Link } from 'react-router-dom';

const Header = () => {
  const [active, setActive] = useState(false);

  const toggleClass = () => {
    setActive((prev) => !prev);
  };

  const closeMenu = () => {
    setActive(false);
  };

  // let closeMenu = (active = false);
  return (
    <>
      <header className='menu-principal'>
        <nav>
          <Link to={'./'}>
            <img
              className='img-logo'
              src={logo}
              alt='Logo Paulo Adson'
              title='Paulo Adson Desenvolvedor'
            />
          </Link>

          <div
            onClick={toggleClass}
            className={active ? 'mobile-menu active' : 'mobile-menu'}
          >
            <div className='line1'></div>
            <div className='line2'></div>
            <div className='line3'></div>
          </div>

          <ul
            className={
              active ? 'nav-list uppercase active' : 'nav-list uppercase'
            }
          >
            <li>
              <Link to={'./'} className='menu-links' onClick={closeMenu}>
                Início
              </Link>
            </li>
            <li>
              <Link
                to={'/portfolio'}
                className='menu-links'
                onClick={closeMenu}
              >
                Portfólio
              </Link>
            </li>
            <li>
              <Link
                to={'/portfolio/#sobre'}
                className='menu-links'
                onClick={closeMenu}
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link to={'/contato'} className='menu-links' onClick={closeMenu}>
                Contato
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
