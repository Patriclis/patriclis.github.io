import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';

// Define a type for the slice state
interface DomainState {
    value: Array<Domain>
}

// Define the initial state using that type
const initialState: DomainState = {
    value: require('../json/domains.json')
}

export const domainSlice = createSlice({
    name: 'domain',
    initialState,
    reducers: {},
})

// Other code such as selectors can use the imported `RootState` type
export const getDomain = (state: RootState) => state.domains.value

export default domainSlice.reducer