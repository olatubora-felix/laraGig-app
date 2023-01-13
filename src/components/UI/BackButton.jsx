import React from 'react'

export const BackButton = ({ children, onClick }) => {
    return (
        <button className="inline-block text-black ml-4 mb-4" onClick={onClick}>
            <i className="fa-solid fa-arrow-left"></i> {children}
        </button>
    )
}
