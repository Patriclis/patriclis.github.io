import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';

// Define a type for the slice state
interface ItemState {
    value: Array<Item>
}

// Define the initial state using that type
const initialState: ItemState = {
    value: require('../json/items.json')
}

export const itemSlice = createSlice({
    name: 'item',
    initialState,
    reducers: {},
})

// Other code such as selectors can use the imported `RootState` type
export const getItem = (state: RootState) => state.items.value

export default itemSlice.reducer