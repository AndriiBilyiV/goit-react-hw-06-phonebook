import { createSlice } from '@reduxjs/toolkit';
import { sample } from 'tempContacts';
import { nanoid } from 'nanoid';

const addContact = (a, b, c) => {
  if (a.find(contact => contact.name.toLowerCase() === b.toLowerCase())) {
    alert(`${b} is alredy in contact list`);
    return;
  }
  return [...a, { id: nanoid(), name: b, tel: c }];
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    array: sample,
  },
  reducers: {
    add(state, action) {
      state.array = addContact(
        state.array,
        action.payload.name,
        action.payload.tel
      );
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
