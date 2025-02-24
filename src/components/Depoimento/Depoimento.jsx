import React from 'react';
import "./styles.css";
import logoAzevedoAdvocacia from "../../assets/images/logos-clientes/azevedo-advocacia-logo.png"
import { Link } from 'react-router-dom';

const Depoimento = ({ bgLogo, cliente, comentario }) => {
    return (
        <>
            <div className='depoimento'>
                <Link
                    className={`depoimento__container-logo ${bgLogo}`}
                    to={"https://asazevedo.adv.br/"}
                    target='_blank'
                    rel="noopener">
                    <img className='depoimento__logo' src={logoAzevedoAdvocacia} alt={`Cliente: ${cliente}`} title={cliente} />
                </Link>
                <span className='depoimento__cliente'>{cliente}</span>
                <p className='depoimento__comentario'>{comentario}</p>
            </div>

        </>
    )
}

export default Depoimento