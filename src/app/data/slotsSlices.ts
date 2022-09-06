import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

// Define a type for the slice state
interface SlotsState {
    value: Array<Slot>
}

// Define the initial state using that type
const initialState: SlotsState = {
    value: require('../../data/slots.json')[0]
}

export const slotSlice = createSlice({
    name: 'slots',
    initialState,
    reducers: {},
})

// Other code such as selectors can use the imported `RootState` type
export const getSlots = (state: RootState) => state.slots.value

export default slotSlice.reducer