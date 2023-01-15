import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { JobDetail } from '../components/common/show/JobDetail'
import { LandingLayout } from '../components/layouts'
import { Loader } from '../components/UI'
import { BackButton } from '../components/UI/BackButton'
import { fetchJob } from '../redux/jobs/jobService'
import { getStatus, selectJob } from '../redux/jobs/jobSlice'

const Show = () => {
    const Navigate = useNavigate()
    const { id } = useParams()
    const user = false
    const dispatch = useDispatch()
    const job = useSelector(selectJob)
    const status = useSelector(getStatus)

    useEffect(() => {
        dispatch(fetchJob(id))
    }, [id, dispatch])
    return (
        <LandingLayout user={user}>
            <BackButton onClick={() => Navigate('/')}>Back</BackButton>
            {status === 'loading' && <Loader text="Loading..." />}
            <JobDetail job={job} />
        </LandingLayout>
    )
}

export default Show
