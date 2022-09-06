import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

// Define a type for the slice state
interface SkillsState {
    value: Array<Skill>
}

// Define the initial state using that type
const initialState: SkillsState = {
    value: require('../../data/skills.json')[0]
}

export const skillSlice = createSlice({
    name: 'skills',
    initialState,
    reducers: {},
})

// Other code such as selectors can use the imported `RootState` type
export const getSkills = (state: RootState) => state.skills.value

export default skillSlice.reducer