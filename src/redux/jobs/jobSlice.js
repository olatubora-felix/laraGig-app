import { createSlice } from '@reduxjs/toolkit'
import { deleteJob, fetchJob, fetchJobs } from './jobService'

const initialState = {
    jobs: [],
    job: {},
    status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
    log: '',
}

const jobSlice = createSlice({
    name: 'jobs',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchJobs.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchJobs.fulfilled, (state, action) => {
                state.status = 'succeeded'
                // Adding date and reactions
                state.jobs = action.payload
                state.log = ''
            })
            .addCase(fetchJobs.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            .addCase(fetchJob.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchJob.fulfilled, (state, action) => {
                state.status = 'succeeded'
                // Adding date and reactions
                state.job = action.payload
            })
            .addCase(fetchJob.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })

            .addCase(deleteJob.fulfilled, (state, action) => {
                if (action.payload?.id) {
                    console.log('Delete could not complete')
                    console.log(action.payload?.id)
                    return
                }
                const { id } = action.payload
                const jobs = state.jobs.filter((job) => job.id !== id)
                state.jobs = jobs
                state.log = 'Deleted'
            })
    },
})

export const selectAllJobs = (state) => state.jobs.jobs
export const selectJob = (state) => state.jobs.job
export const getErorr = (state) => state.jobs.error
export const getStatus = (state) => state.jobs.status
export const getLog = (state) => state.jobs.log
export const { getUserPost } = jobSlice.actions
export default jobSlice.reducer
