import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filterSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactsReducer } from './contactsSlice';

const persistConfig = {
  key: 'contacts',
  storage,
};

const persistedContactsReducer = persistReducer(persistConfig, contactsReducer);

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    contacts: persistedContactsReducer,
  },
  middleware: [],
});

export const persistor = persistStore(store);
