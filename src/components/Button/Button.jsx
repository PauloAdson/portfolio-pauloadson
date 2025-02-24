import React from 'react'
import "./styles.css"
import { Link } from 'react-router-dom'

const Button = ({ btnText, btnLink, target }) => {
    return (
        <Link
            className="portfolio__home-btn btn__style"
            to={btnLink}
            target={target}
            rel="noopener"
        >
            {btnText}
        </Link>
    )
}

export default Button