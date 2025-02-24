import React from 'react';
import "./styles.css";
import Depoimento from '../Depoimento/Depoimento';

const CarrosselDepoimentos = () => {
    return (
        <div className='depoimentos__carrosel'>
            <Depoimento bgLogo={"white"} cliente={"Azevedo Advocacia"} comentario={"E ficou muito top ! Trabalho incrível 👏 agradecemos muito pelo empenho em compreender e nos explicar cada passo."} />
        </div>
    )
}

export default CarrosselDepoimentos