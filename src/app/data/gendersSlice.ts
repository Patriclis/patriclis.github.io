import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

// Define a type for the slice state
interface GendersState {
    value: Array<Gender>
}

// Define the initial state using that type
const initialState: GendersState = {
    value: require('../../data/genders.json')[0]
}

export const genderSlice = createSlice({
    name: 'genders',
    initialState,
    reducers: {},
})

// Other code such as selectors can use the imported `RootState` type
export const getGenders = (state: RootState) => state.genders.value

export default genderSlice.reducer