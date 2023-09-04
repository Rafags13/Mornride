import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../apps/store';
import { CardProps } from '../../util/model/CardProps';
import BikeProfiles from '../../util/data/database';

interface FavoriteBikeState {
    bikes: CardProps[]
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
            const newBike: CardProps = {
                id: currentBike?.id || 0,
                imageUrl: currentBike?.currentBikeImage,
                titleLabel: currentBike?.title || "",
                avaliableColors: currentBike?.avaliableColors || [],
                price: currentBike?.price || 0,
                bikes: currentBike?.bikes || []
            }
            state.bikes.push(newBike);
        },
        removeFromFavorite: (state, action: PayloadAction<number>) => {
            state.bikes.filter((bike) => bike.id !== action.payload);
        },
    }
})