import React from 'react'
import { Link } from 'react-router-dom'
import { LandingLayout } from '../components/layouts'
import { Search } from '../components/search/Search'
import { lists } from '../constant/jobsLists'

const manage = () => {
    const user = true
    const handleDelete = (id) => {
        lists.filter((list) => list.id !== id)
        console.log('deleted', id)
    }
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
                                    <td className="px-2 py-4 border-t border-b border-gray-300 lg:text-lg text-xs">
                                        <Link to={`/show/${list.slug}`}>
                                            {list.title}
                                        </Link>
                                    </td>
                                    <td className="px-4 py-8 border-t border-b border-gray-300 lg:text-lg text-xs">
                                        <Link
                                            to="/show/edit/2"
                                            className="text-blue-400 px-6 py-2 rounded-xl flex items-center"
                                        >
                                            <i className="fa-solid fa-pen-to-square"></i>
                                            Edit
                                        </Link>
                                    </td>
                                    <td className="px-4 py-8 border-t border-b border-gray-300 lg:text-lg text-xs">
                                        <button
                                            className="text-red-600 flex items-center"
                                            onClick={() =>
                                                handleDelete(list.id)
                                            }
                                        >
                                            <i className="fa-solid fa-trash-can mr-2"></i>
                                            Delete
                                        </button>
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
