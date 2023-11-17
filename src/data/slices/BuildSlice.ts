import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';

// Define a type for the slice state
interface BuildState {
    value: Array<Build>
}

// Define the initial state using that type
const initialState: BuildState = {
    value: require('../json/builds.json')
}

export const buildSlice = createSlice({
    name: 'build',
    initialState,
    reducers: {},
})

// Other code such as selectors can use the imported `RootState` type
export const getBuild = (state: RootState) => state.builds.value

export default buildSlice.reducer