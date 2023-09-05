import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../apps/store';
import { CardProps } from '../../util/model/CardProps';
import BikeProfiles from '../../util/data/database';
import { AddBikeDto } from '../../util/model/AddBikeDto';

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
        addFromCart: (state, action: PayloadAction<AddBikeDto>) => {
            const bikeInSystem = state.bikes.find(bike => bike.id === action.payload.bikeId);
            if (bikeInSystem) {
                bikeInSystem.counting += action.payload.counting;
                return;
            }
            const currentBike = BikeProfiles.find(bike => bike.id === action.payload.bikeId);
            const newBike: CardProps = {
                id: currentBike?.id || 0,
                imageUrl: currentBike?.currentBikeImage,
                titleLabel: currentBike?.title || "",
                avaliableColors: currentBike?.avaliableColors || [],
                price: currentBike?.price || 0,
                bikes: currentBike?.bikes || [],
                counting: action.payload.counting,
            }
            state.bikes.push(newBike);
        },
        removeFromCart: (state, action: PayloadAction<number>) => {
            state.bikes = state.bikes.filter((bike) => bike.id !== action.payload);
        },
    }
});

export const { addFromCart, removeFromCart } = cartSlice.actions;

export const selectBikesInCart = (state: RootState) => state.bikes;

export default cartSlice.reducer;