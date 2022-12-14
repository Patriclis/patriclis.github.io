import { configureStore } from '@reduxjs/toolkit';
import gearsetReducer from './features/gearsetSlice';
import equipmentReducer from './data/equipmentSlice';

const store = configureStore({
    reducer: {
        equipment: equipmentReducer,
        gearset: gearsetReducer
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;