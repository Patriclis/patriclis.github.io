import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

// Define a type for the slice state
interface EquipmentState {
    value: Array<Item>
}

// Define the initial state using that type
const initialState: EquipmentState = {
    value: require('../../data/equipment/equipment.json')
}

export const equipmentSlice = createSlice({
    name: 'equipment',
    initialState,
    reducers: {},
})

// Other code such as selectors can use the imported `RootState` type
export const getEquipment = (state: RootState) => state.equipment.value

export default equipmentSlice.reducer