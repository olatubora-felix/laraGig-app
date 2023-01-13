import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { JobDetail } from '../components/common/show/JobDetail'
import { LandingLayout } from '../components/layouts'
import { Search } from '../components/search/Search'
import { BackButton } from '../components/UI/BackButton'
import { lists } from '../constant/jobsLists'

const Show = () => {
    const Navigate = useNavigate()
    const { slug } = useParams()
    const job = lists.find((list) => list.slug === slug)
    const user = false

    return (
        <LandingLayout user={user}>
            <Search />
            <BackButton onClick={() => Navigate('/')}>Back</BackButton>
            <JobDetail job={job} />
        </LandingLayout>
    )
}

export default Show
