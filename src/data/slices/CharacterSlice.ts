import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';

// Define a type for the slice state
interface CharacterState {
    value: Array<Character>
}

// Define the initial state using that type
const initialState: CharacterState = {
    value: require('../json/characters.json')
}

export const characterSlice = createSlice({
    name: 'character',
    initialState,
    reducers: {},
})

// Other code such as selectors can use the imported `RootState` type
export const getCharacterSet = (state: RootState) => state.characters.value

export default characterSlice.reducer