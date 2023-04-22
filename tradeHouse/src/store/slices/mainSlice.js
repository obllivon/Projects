import { createSlice } from '@reduxjs/toolkit';

const mainSlice = createSlice({
  name: 'mainSlice',
  initialState: {
    homes: [],
    data: [],
    categoryName: 6,
  },
  reducers: {
    getHomes: (state, action) => {
      state.homes = [...state.homes, ...action.payload];
    },
    getCategory: (state, action) => {
      state.data = action.payload;
    },
    setCategory: (state, action) => {
      state.categoryName = action.payload;
    },
  },
});
export const { getHomes, getCategory, setCategory } = mainSlice.actions;

export default mainSlice.reducer;
