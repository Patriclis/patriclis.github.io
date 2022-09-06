import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';

// Define a type for the slice state
interface JobsState {
    value: Array<Job>
}

// Define the initial state using that type
const initialState: JobsState = {
    value: require('../../data/jobs.json')[0]
}

export const jobsSlice = createSlice({
    name: 'jobs',
    initialState,
    reducers: {},
})

// Other code such as selectors can use the imported `RootState` type
export const getJobs = (state: RootState) => state.jobs.value

export default jobsSlice.reducer