import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../apps/store';
import { CardProps } from '../../util/model/CardProps';
import BikeProfiles from '../../util/data/database';

interface CartState {
    bikes: CardProps[]
}

const initialState: CartState = {
    bikes: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<number>) => {
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
        remove: (state, action: PayloadAction<number>) => {
            state.bikes.filter((bike) => bike.id !== action.payload);
        },
    }
});

export const { add, remove } = cartSlice.actions;

export const selectBikesInCart = (state: RootState) => state.bikes;

export default cartSlice.reducer;