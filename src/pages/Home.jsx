import React from 'react'
import { Link } from 'react-router-dom'
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
            <section className="mx-auto container p-4 text-end">
                <Link
                    to="/create"
                    className=" top-1/3 right-10 bg-black text-white py-2 px-5 ml-4 rounded-lg"
                >
                    Post Job
                </Link>
            </section>
            <JobsListing />
        </LandingLayout>
    )
}

export default Home
