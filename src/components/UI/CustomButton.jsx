import React from 'react'

export const CustomButton = ({ className, type, text }) => {
    return (
        <button type={type} className={className}>
            {text}
        </button>
    )
}
