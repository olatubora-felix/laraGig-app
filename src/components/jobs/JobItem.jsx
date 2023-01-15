import React from 'react'
import { Link } from 'react-router-dom'

export const JobItem = ({ list }) => {
    return (
        <div className="bg-gray-50 border border-gray-200 rounded p-6">
            <div className="flex">
                <img
                    className="hidden w-48 mr-6 md:block"
                    src={list.image}
                    alt={list.name}
                />
                <div>
                    <h3 className="lg:text-2xl text-xl">
                        <Link to={`/show/${list.id}`}>{list.title}</Link>
                    </h3>
                    <div className="lg:text-xl text-base font-bold mb-4">
                        {list.name}
                    </div>
                    <ul className="flex">
                        {list.tags &&
                            list.tags.map((tag, i) => (
                                <li
                                    className="flex items-center justify-center bg-black text-white rounded-xl py-1 px-3 mr-2 lg:text-xs text-[8px]"
                                    key={i}
                                >
                                    <Link to={`/search/${tag}`}>{tag}</Link>
                                </li>
                            ))}
                    </ul>
                    <div className="text-lg mt-4">
                        <i className="fa-solid fa-location-dot"></i>{' '}
                        {list.location}
                    </div>
                </div>
            </div>
        </div>
    )
}
