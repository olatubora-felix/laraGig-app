import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchJobs = createAsyncThunk('jobs/fetchJobs', async (result) => {
    const response = await axios.get(
        result
            ? `${process.env.REACT_APP_BASE_URL}?q=${result}`
            : process.env.REACT_APP_BASE_URL
    )
    return response.data
})
export const fetchJob = createAsyncThunk('jobs/fetchJob', async (id) => {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/${id}`)
    return response.data
})
export const deleteJob = createAsyncThunk('jobs/deleteJob', async (id) => {
    const response = await axios.delete(
        `${process.env.REACT_APP_BASE_URL}/${id}`
    )
    return response.data
})
