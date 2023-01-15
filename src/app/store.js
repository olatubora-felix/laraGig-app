import { configureStore } from '@reduxjs/toolkit'
import JobsReducer from '../redux/jobs/jobSlice'

export const store = configureStore({
    reducer: {
        jobs: JobsReducer,
    },
})
