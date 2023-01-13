import React from 'react'

export const CustomInput = ({
    label,
    type,
    onChange,
    value,
    name,
    error,
    placeholder,
    rows = '10',
}) => {
    let content

    switch (type) {
        case 'textarea':
            content = (
                <textarea
                    class="border border-gray-200 rounded p-2 w-full"
                    name={name}
                    rows={rows}
                    placeholder={placeholder ? placeholder : ''}
                ></textarea>
            )
            break
        default:
            content = (
                <input
                    type={type}
                    className="border border-gray-200 rounded p-2 w-full"
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder ? placeholder : ''}
                />
            )
            break
    }
    return (
        <div className="mb-6">
            {label && (
                <label htmlFor={name} className="inline-block text-lg mb-2">
                    {label}
                </label>
            )}
            {content}
            {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
        </div>
    )
}
