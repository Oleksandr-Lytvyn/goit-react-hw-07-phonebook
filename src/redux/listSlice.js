// import { nanoid } from 'nanoid';
import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, deleteContact } from './operations';

// const initialState = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

const initialState = {
  data: [
    // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  isLoading: false,
  error: null,
};

const listSlice = createSlice({
  name: 'list',
  initialState: initialState,
  extraReducers: {
    [fetchContacts.pending](state, action) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.data = action.payload;
      state.isLoading = false;
    },
    [fetchContacts.rejected](state, action) {
      console.log(action.payload);
      state.error = action.payload;
      state.isLoading = false;
    },
    [deleteContact.pending](state, action) {
      state.isLoading = true;
    },
    [deleteContact.fulfilled](state, action) {
      const index = state.data.findIndex(task => task.id === action.payload.id);
      state.data.splice(index, 1);
      state.isLoading = false;
    },
    [deleteContact.rejected](state, action) {
      // console.log(action.payload);
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

// export const { addContact } = listSlice.actions;
export const listReducer = listSlice.reducer;

// const listSlice = createSlice({
//   name: 'list',
//   initialState: initialState,
//   reducers: {
//     addContact: {
//       reducer(state, action) {
//         state.data.push(action.payload);
//       },
//       prepare(name, number) {
//         return {
//           payload: {
//             id: nanoid(),
//             name: name,
//             number: number,
//           },
//         };
//       },
//     },
//     deleteContact(state, action) {
//       const index = state.data.findIndex(task => task.id === action.payload);
//       state.data.splice(index, 1);
//     },
//   },
// });
