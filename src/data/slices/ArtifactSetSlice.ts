import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';

// Define a type for the slice state
interface ArtifactSetState {
    value: Array<ArtifactSet>
}

// Define the initial state using that type
const initialState: ArtifactSetState = {
    value: require('../json/artifactSets.json')
}

export const artifactSetSlice = createSlice({
    name: 'artifactSet',
    initialState,
    reducers: {},
})

// Other code such as selectors can use the imported `RootState` type
export const getArtifactSet = (state: RootState) => state.artifactSets.value

export default artifactSetSlice.reducer