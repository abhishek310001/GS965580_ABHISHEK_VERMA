import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Store {
  id: string;
  name: string;
  city: string;
  state: string;
  order: number;
}

interface StoresState {
  stores: Store[];
}

const initialState: StoresState = {
  stores: [
    { id: '1', name: 'Atlanta Outfitters', city: 'Atlanta', state: 'GA', order: 0 },
    { id: '2', name: 'Chicago Charm Boutique', city: 'Chicago', state: 'IL', order: 1 },
    { id: '3', name: 'Dallas Denim Co.', city: 'Dallas', state: 'TX', order: 2 },
    { id: '4', name: 'Seattle Style Shop', city: 'Seattle', state: 'WA', order: 3 },
  ],
};

const storesSlice = createSlice({
  name: 'stores',
  initialState,
  reducers: {
    addStore: (state, action: PayloadAction<Omit<Store, 'id' | 'order'>>) => {
      const newStore = {
        id: Date.now().toString(),
        ...action.payload,
        order: state.stores.length,
      };
      state.stores.push(newStore);
    },
    updateStore: (state, action: PayloadAction<Store>) => {
      const index = state.stores.findIndex((store) => store.id === action.payload.id);
      if (index !== -1) {
        state.stores[index] = action.payload;
      }
    },
    removeStore: (state, action: PayloadAction<string>) => {
      state.stores = state.stores.filter((store) => store.id !== action.payload);
    },
    reorderStores: (state, action: PayloadAction<{ startIndex: number; endIndex: number }>) => {
      const { startIndex, endIndex } = action.payload;
      const result = Array.from(state.stores);
      const [removed] = result.splice(startIndex, 1);
      result.splice(endIndex, 0, removed);
      state.stores = result.map((store, index) => ({ ...store, order: index }));
    },
  },
});

export const { addStore, updateStore, removeStore, reorderStores } = storesSlice.actions;

export default storesSlice.reducer;
