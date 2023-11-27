import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../apps/store';
import { AddressCardProps } from '../../components/AddressCard';

export type PurchaseBikesProps = {
    ids: number[],
  addresses: AddressCardProps[],
  selectAddress: AddressCardProps
};
interface PurchaseBikesState {
    currentBought: PurchaseBikesProps
}

const initialState: PurchaseBikesState = {
  currentBought: {
    ids: [],
    addresses: [{
      street: 'Praça da Sé - Lado Par',
      neighborhood: 'Sé',
      zipCode: '01001-001',
    }, {
      street: 'Praça da Sé - Lado Ímpar',
      neighborhood: 'Sé',
      zipCode: '01001-000'
    }],
    get selectAddress() {
      return this.addresses[0]
    }
  }
}

export const PurchaseBikesSlice = createSlice({
  name: 'purchase',
  initialState,
  reducers: {
    addBikeIds: (state, action: PayloadAction<number[]>) => {
      state.currentBought.ids = action.payload;
      },
    addSelectedAddress: (state, action: PayloadAction<string>) => {
      const currentAddressSelected = state.currentBought.addresses.find(address => address.zipCode === action.payload);
      
      if(currentAddressSelected)
        state.currentBought.selectAddress = currentAddressSelected;
      },
    }
})

export const { addBikeIds, addSelectedAddress } = PurchaseBikesSlice.actions;

export const selectBikesInCart = (state: RootState) => state.favoriteBikes;

export default PurchaseBikesSlice.reducer;