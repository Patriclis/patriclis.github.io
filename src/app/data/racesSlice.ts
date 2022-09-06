import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

// Define a type for the slice state
interface RacesState {
    value: Array<Race>
}

// Define the initial state using that type
const initialState: RacesState = {
    value: require('../../data/races.json')[0]
}

export const racesSlice = createSlice({
    name: 'races',
    initialState,
    reducers: {},
})

// Other code such as selectors can use the imported `RootState` type
export const getRaces = (state: RootState) => state.races.value

export default racesSlice.reducer