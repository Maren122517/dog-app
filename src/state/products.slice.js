import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { FAILED, IDLE, LOADING, SUCCEEDED } from './status';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await axios.get('https://fakestoreapi.com/products');
  return response.data;
});

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    status: IDLE,
    error: null,
  },

  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        console.log("pending: ", action);
        state.status = LOADING;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        console.log("fulfilled: ", action);
        state.status = SUCCEEDED;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        console.log("rejected: ", action); 
        state.status = FAILED;
        state.error = action.error.message;
      });
  }
});

export default productsSlice.reducer;
