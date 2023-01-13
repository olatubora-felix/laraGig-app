import React from 'react'

export const BackButton = ({ children, onClick }) => {
    return (
        <div className="mx-auto container p-4">
            <button className="inline-block text-black mb-4" onClick={onClick}>
                <i className="fa-solid fa-arrow-left"></i> {children}
            </button>
        </div>
    )
}
