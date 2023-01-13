import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
    return (
        <footer className="fixed bottom-0 left-0 w-full flex items-center justify-between font-bold bg-primary text-white mt-24 opacity-90 md:justify-center p-8">
            <p className="text-xs">
                Copyright &copy; {new Date().getFullYear()}, All Rights reserved
            </p>

            <Link
                to="/create"
                className="absolute top-1/3 right-10 bg-black text-white py-2 px-5 ml-4"
            >
                Post Job
            </Link>
        </footer>
    )
}
