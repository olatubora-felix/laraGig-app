import React from 'react'

export const AuthHeading = ({ captionTitle, captionBody }) => {
    return (
        <header className="text-center">
            <h2 className="text-2xl font-bold uppercase mb-1">
                {captionTitle}
            </h2>
            <p className="mb-4">{captionBody}</p>
        </header>
    )
}
