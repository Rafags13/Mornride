import { configureStore } from '@reduxjs/toolkit';

import favoriteBikesReducer from '../features/FavoriteBikes/FavoriteBikesSlice';
import purchaseBikesReducer from '../features/PurchaseBikes/PurchaseBikesSlide';

export const store = configureStore({
    reducer: {
        favoriteBikes: favoriteBikesReducer,
        purchaseBikes: purchaseBikesReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch