import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://63bf12e0e348cb07622066df.mockapi.io/contacts';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchingSuccess',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (text, thunkAPI) => {
    try {
      const response = await axios.post(url, {
        name: text.name,
        phone: text.number,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(
        `https://63bf12e0e348cb07622066df.mockapi.io/contacts/${id}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
