import React from 'react'
import "./styles.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileScreenButton } from '@fortawesome/free-solid-svg-icons'

const Beneficio = ({ beneficioIcon, beneficioTitle, beneficioParag }) => {
    return (
        <>
            <div className='beneficio'>
                <FontAwesomeIcon className='beneficio__icon' icon={beneficioIcon} />
                <span className='beneficio__title uppercase'>{beneficioTitle}</span>
                <p className='beneficio__parag'>{beneficioParag}</p>
            </div>
        </>
    )
}

export default Beneficio