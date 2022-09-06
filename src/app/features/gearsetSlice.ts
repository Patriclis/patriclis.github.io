import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

// Define a type for the slice state
interface GearsetState {
    value: Gearset
}

// Define the initial state using that type
const initialState: GearsetState = {
    value: {} as Gearset,
}

export const gearsetSlice = createSlice({
    name: 'gearset',
    initialState,
    reducers: {
        addToGearset: (state: GearsetState, action: PayloadAction<{ equipment: Item, slotName: keyof Gearset }>) => {
            state.value[action.payload.slotName] = action.payload.equipment;
        },
    },
})

export const { addToGearset } = gearsetSlice.actions
// Other code such as selectors can use the imported `RootState` type
export const selectGearset = (state: RootState) => state.gearset.value
export default gearsetSlice.reducer