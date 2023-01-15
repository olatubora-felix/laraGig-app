import React from 'react'

export const Loader = ({ text, className }) => {
    return (
        <div className="mx-auto container p-4">
            <h4 className={className}>{text}</h4>
        </div>
    )
}
