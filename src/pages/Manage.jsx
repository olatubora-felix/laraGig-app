import React from 'react'
import { Link } from 'react-router-dom'
import { LandingLayout } from '../components/layouts'
import { Search } from '../components/search/Search'
import { lists } from '../constant/jobsLists'

const manage = () => {
    const user = true
    return (
        <LandingLayout user={user}>
            <Search />
            <div className="mx-4">
                <div className="bg-gray-50 border border-gray-200 p-10 rounded">
                    <header>
                        <h1 className="text-3xl text-center font-bold my-6 uppercase">
                            Manage Gigs
                        </h1>
                    </header>

                    <table className="w-full table-auto rounded-sm">
                        <tbody>
                            {lists.map((list) => (
                                <tr className="border-gray-300" key={list.id}>
                                    <td className="px-4 py-8 border-t border-b border-gray-300 text-lg">
                                        <Link to={`/show/${list.slug}`}>
                                            {list.title}
                                        </Link>
                                    </td>
                                    <td className="px-4 py-8 border-t border-b border-gray-300 text-lg">
                                        <Link
                                            to="/show/edit/2"
                                            className="text-blue-400 px-6 py-2 rounded-xl"
                                        >
                                            <i className="fa-solid fa-pen-to-square"></i>
                                            Edit
                                        </Link>
                                    </td>
                                    <td className="px-4 py-8 border-t border-b border-gray-300 text-lg">
                                        <form action="">
                                            <button className="text-red-600">
                                                <i className="fa-solid fa-trash-can"></i>
                                                Delete
                                            </button>
                                        </form>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </LandingLayout>
    )
}

export default manage
