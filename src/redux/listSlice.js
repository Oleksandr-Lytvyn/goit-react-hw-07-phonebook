import { nanoid } from 'nanoid';
import { createSlice } from '@reduxjs/toolkit';

// const initialState = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

const initialState = {
  data: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
};

const listSlice = createSlice({
  name: 'list',
  initialState: initialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.data.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name: name,
            number: number,
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.data.findIndex(task => task.id === action.payload);
      state.data.splice(index, 1);
    },
  },
});

// Генераторы экшенов
export const { addContact, deleteContact } = listSlice.actions;
// Редюсер слайса
export const listReducer = listSlice.reducer;
