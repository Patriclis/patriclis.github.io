import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counterSlice';
import gearsetReducer from './features/gearsetSlice';
import jobsReducer from './data/jobsSlice';
import gendersReducer from './data/gendersSlice';
import skillsReducer from './data/skillsSlice';
import racesReducer from './data/racesSlice';
import slotsReducer from './data/slotsSlices';
import equipmentReducer from './data/equipmentSlice';

const store = configureStore({
    reducer: {
        counter: counterReducer,
        jobs: jobsReducer,
        genders: gendersReducer,
        skills: skillsReducer,
        races: racesReducer,
        slots: slotsReducer,
        equipment: equipmentReducer,
        gearset: gearsetReducer
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;