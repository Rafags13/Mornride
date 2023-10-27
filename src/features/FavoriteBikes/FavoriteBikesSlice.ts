import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../apps/store';
import { CardProps } from '../../util/model/CardProps';
import BikeProfiles from '../../util/data/database';

export type FavoriteBikesProps = Omit<CardProps, 'counting'>;
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
        addFromFavorite: (state, action: PayloadAction<number>) => {
            const currentBike = BikeProfiles.find(bike => bike.id === action.payload);
            const newBike: FavoriteBikesProps = {
                id: currentBike!.id,
                imageUrl: currentBike!.currentBikeImage,
                titleLabel: currentBike!.title,
                avaliableColors: currentBike!.avaliableColors,
                price: currentBike!.price,
                bikes: currentBike!.bikes,
                amountOnStock: currentBike?.stock
            }
            state.bikes.push(newBike);
        },
        removeFromFavorite: (state, action: PayloadAction<number>) => {
            state.bikes = state.bikes.filter((bike) => bike.id !== action.payload);
        },
    }
})

export const { addFromFavorite, removeFromFavorite } = FavoriteBikesSlice.actions;

export const selectBikesInCart = (state: RootState) => state.bikes;

export default FavoriteBikesSlice.reducer;