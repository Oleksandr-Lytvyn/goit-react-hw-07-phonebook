import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    addFilter(state, action) {
      return action.payload;
    },
  },
});

// Генераторы экшенов
export const { addFilter } = filterSlice.actions;
// Редюсер слайса
export const filterReducer = filterSlice.reducer;
