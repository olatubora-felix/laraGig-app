import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
    return (
        <footer className=" w-full flex justify-between items-center  font-bold bg-primary text-white md:justify-center p-4">
            <p className="text-xs">
                Copyright &copy; {new Date().getFullYear()}, All Rights reserved
            </p>

            <Link
                to="/create"
                className=" bg-black text-white py-2 px-3 rounded-md"
            >
                Post Job
            </Link>
        </footer>
    )
}
