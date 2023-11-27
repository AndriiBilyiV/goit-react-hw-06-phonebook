import { createSlice } from '@reduxjs/toolkit';
import { sample } from 'tempContacts';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    array: sample,
  },
  reducers: {
    add(state, action) {
      state.array = [...state.array, action.payload];
    },
    del(state, action) {
      state.array = state.array.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { add, del } = contactsSlice.actions;
