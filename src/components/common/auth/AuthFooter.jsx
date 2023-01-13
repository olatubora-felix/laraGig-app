import React from 'react'
import { Link } from 'react-router-dom'

export const AuthFooter = ({ text, link, linkText }) => {
    return (
        <p>
            {text}
            <Link to={link} className="text-primary">
                {linkText}
            </Link>
        </p>
    )
}
