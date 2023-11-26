import { createSlice } from '@reduxjs/toolkit';
import { sample } from 'tempContacts';
import { nanoid } from 'nanoid';

const addContact = (contacts, name, tel) => {
  if (
    contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())
  ) {
    alert(`${name} is alredy in contact list`);
    return contacts;
  }
  return [...contacts, { id: nanoid(), name: name, tel: tel }];
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
