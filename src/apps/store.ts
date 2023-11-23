import { configureStore } from '@reduxjs/toolkit';

import favoriteBikesReducer from '../features/FavoriteBikes/FavoriteBikesSlice';

export const store = configureStore({
    reducer: {
        favoriteBikes: favoriteBikesReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch