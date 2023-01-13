import React from 'react'
import { Hero } from '../components/common/home'
import { JobsListing } from '../components/jobs/JobsListing'
import { LandingLayout } from '../components/layouts'
import { Search } from '../components/search/Search'

const Home = () => {
    const user = false
    return (
        <LandingLayout user={user}>
            <Hero />
            <Search />
            <JobsListing />
        </LandingLayout>
    )
}

export default Home
