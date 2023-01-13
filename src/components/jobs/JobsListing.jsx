import React from 'react'
import { lists } from '../../constant/jobsLists'
import { JobItem } from './JobItem'

export const JobsListing = () => {
    return (
        <div className="lg:grid lg:grid-cols-2 gap-4 space-y-4 md:space-y-0  mx-auto container p-4">
            {lists.map((list) => (
                <JobItem key={list.id} list={list} />
            ))}
        </div>
    )
}
