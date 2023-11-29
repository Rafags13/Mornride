import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../apps/store';

export type FavoriteBikesProps = {
    id: number
    title: string
    currentBikeImageUrl: string
    stock: number
    price: number
};
interface FavoriteBikeState {
    bikes: FavoriteBikesProps[]
}

const initialState: FavoriteBikeState = {
    bikes: []
}

export const FavoriteBikesSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        addFromFavorite: (state, action: PayloadAction<FavoriteBikesProps>) => {
            state.bikes.push(action.payload);
        },
        removeFromFavorite: (state, action: PayloadAction<number>) => {
            state.bikes = state.bikes.filter((bike) => bike.id !== action.payload);
        },
    }
})

export const { addFromFavorite, removeFromFavorite } = FavoriteBikesSlice.actions;

export const selectBikesInCart = (state: RootState) => state.favoriteBikes;

export default FavoriteBikesSlice.reducer;