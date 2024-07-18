import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    { id: 1, name: 'Cafe', price: 10 },
    { id: 2, name: 'Leche', price: 20 },
    { id: 3, name: 'Azucar', price: 30 },
    { id: 4, name: 'Arroz', price: 40 },
    { id: 5, name: 'Sal', price: 50 },
    { id: 6, name: 'Cereal', price: 60 },
    { id: 7, name: 'Sopa', price: 70 },
    { id: 8, name: 'Lentejas', price: 80 },
    { id: 9, name: 'Pimienta', price: 90 },
    { id: 10, name: 'Agua', price: 100 },
  ]
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, action) {
      state.items = action.payload;
    }
  }
});

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;
