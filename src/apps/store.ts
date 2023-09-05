import { configureStore } from '@reduxjs/toolkit';

import cartReducer from '../features/Cart/CartSlice';
// ...

export const store = configureStore({
    reducer: {
        bikes: cartReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch