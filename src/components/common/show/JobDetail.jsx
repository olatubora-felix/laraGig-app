import React from 'react'
import { Link } from 'react-router-dom'

export const JobDetail = ({ job }) => {
    return (
        <div className="mx-4">
            <div className="bg-gray-50 border border-gray-200 p-10 rounded">
                <div className="flex flex-col items-center justify-center text-center">
                    <img className="w-48 mr-6 mb-6" src={job.image} alt="" />

                    <h3 className="text-2xl mb-2">{job.title}</h3>
                    <div className="text-xl font-bold mb-4">{job.name}</div>
                    <ul className="flex">
                        {job.tags &&
                            job.tags.map((tag) => (
                                <li className="bg-black text-white rounded-xl px-3 py-1 mr-2">
                                    <Link to={`#${tag}`}>{tag}</Link>
                                </li>
                            ))}
                    </ul>
                    <div className="text-lg my-4">
                        <i className="fa-solid fa-location-dot"></i>{' '}
                        {job.location}
                    </div>
                    <div className="border border-gray-200 w-full mb-6"></div>
                    <div>
                        <h3 className="text-3xl font-bold mb-4">
                            Job Description
                        </h3>
                        <div className="text-lg space-y-6">
                            <p>{job.description}</p>
                            <p>{job.description}</p>

                            <Link
                                to={`mailto:${job.email}`}
                                className="block bg-primary text-white mt-6 py-2 rounded-xl hover:opacity-80"
                            >
                                <i className="fa-solid fa-envelope mr-4"></i>
                                Contact Employer
                            </Link>

                            <Link
                                to={job.website}
                                target="_blank"
                                className="block bg-black text-white py-2 rounded-xl hover:opacity-80"
                            >
                                <i className="fa-solid fa-globe"></i> Visit
                                Website
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
