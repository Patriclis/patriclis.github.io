import { configureStore } from '@reduxjs/toolkit';
import artifactSetReducer from './slices/ArtifactSetSlice';
import characterReducer from './slices/CharacterSlice';
import domainReducer from './slices/DomainSlice';
import buildReducer from './slices/BuildSlice';

const store = configureStore({
    reducer: {
        artifactSets: artifactSetReducer,
        characters: characterReducer,
        domains: domainReducer,
        builds: buildReducer,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;