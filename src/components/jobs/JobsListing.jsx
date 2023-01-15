import React from 'react'
import { useSelector } from 'react-redux'
import { getErorr, selectAllJobs, getStatus } from '../../redux/jobs/jobSlice'
import { Loader } from '../UI'

import { JobItem } from './JobItem'

export const JobsListing = () => {
    const jobs = useSelector(selectAllJobs)
    const erorr = useSelector(getErorr)
    const status = useSelector(getStatus)

    if (status === 'loading') {
        return (
            <Loader
                text="Loading..."
                className="text-2xl text-purple-700 font-bold"
            />
        )
    }
    if (status === 'failed') {
        return (
            <Loader text={erorr} className="text-2xl text-red-700 font-bold" />
        )
    }
    return (
        <div className="lg:grid lg:grid-cols-2 gap-4 space-y-4 md:space-y-0  mx-auto container p-4">
            {jobs.length > 0 ? (
                jobs.map((list) => <JobItem key={list.id} list={list} />)
            ) : (
                <Loader
                    text="No Job Found"
                    className="text-2xl text-blue-700 font-bold"
                />
            )}
        </div>
    )
}
