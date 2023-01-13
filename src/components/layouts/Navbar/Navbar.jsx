import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { routes } from '../../../constant/routes'

export const Navbar = ({ user }) => {
    const location = useLocation()
    const current = location.pathname

    return (
        <nav className="flex justify-between items-center mb-4 mx-auto container h-20 p-4">
            <Link to="/" className="font-bold text-2xl">
                Lara<span className="text-primary">Gigs</span>
            </Link>
            <ul className="flex space-x-6 mr-6 text-lg">
                {!user ? (
                    <>
                        {' '}
                        {routes.map((route) => (
                            <li key={route.name}>
                                <NavLink
                                    to={route.link}
                                    className={`hover:text-primary ${
                                        current === route.link
                                            ? 'text-primary'
                                            : ''
                                    }`}
                                >
                                    <i className="fa-solid fa-user-plus"></i>{' '}
                                    {route.name}
                                </NavLink>
                            </li>
                        ))}
                    </>
                ) : (
                    <>
                        <li>
                            <NavLink
                                to="/manage"
                                className="hover:text-laravel"
                            >
                                <i className="fa-solid fa-gear"></i> Manage Gigs
                            </NavLink>
                        </li>
                        <li>
                            <form>
                                <button>
                                    <i className="fa-solid fa-door-closed"></i>{' '}
                                    Logout
                                </button>
                            </form>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    )
}
