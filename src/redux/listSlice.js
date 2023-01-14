// import { nanoid } from 'nanoid';
import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, deleteContact, addContact } from './operations';

const extraActions = [fetchContacts, deleteContact, addContact];

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

const listSlice = createSlice({
  name: 'list',
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        const index = state.data.findIndex(
          task => task.id === action.payload.id
        );
        state.data.splice(index, 1);
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      .addMatcher(
        isAnyOf(...extraActions.map(action => action.pending)),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(...extraActions.map(action => action.rejected)),
        (state, action) => {
          state.error = action.payload;
          state.isLoading = false;
        }
      )
      .addMatcher(
        isAnyOf(...extraActions.map(action => action.fulfilled)),
        state => {
          state.isLoading = false;
          state.error = null;
        }
      );
  },
});

export const listReducer = listSlice.reducer;
