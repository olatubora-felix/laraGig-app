import React from 'react'
import { Link } from 'react-router-dom'
import hero from '../../../assets/images/laravel-logo.png'

export const Hero = () => {
    return (
        <section className="relative h-72 bg-primary flex flex-col justify-center align-center text-center space-y-4 mb-4">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-no-repeat bg-center url"></div>

            <div className="z-10">
                <h1 className="text-6xl font-bold uppercase text-white">
                    Lara<span className="text-black">Gigs</span>
                </h1>
                <p className="text-2xl text-gray-200 font-bold my-4">
                    Find or post Tech jobs & projects
                </p>
                <div>
                    <Link
                        to="/register"
                        className="inline-block border-2 border-white text-white py-2 px-4 rounded-xl uppercase mt-2 hover:text-black hover:border-black"
                    >
                        Sign Up to List a Gig
                    </Link>
                </div>
            </div>
        </section>
    )
}
