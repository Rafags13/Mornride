import { configureStore } from '@reduxjs/toolkit';

import cartReducer from '../features/Cart/CartSlice';
import favoriteBikesReducer from '../features/FavoriteBikes/FavoriteBikesSlice';
// ...

export const store = configureStore({
    reducer: {
        bikes: cartReducer,
        favoriteBikes: favoriteBikesReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch