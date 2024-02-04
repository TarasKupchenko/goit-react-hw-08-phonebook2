import { nanoid } from 'nanoid';
import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './rootReducer';
import { fetchContacts, addContact, deleteContact } from './contactsApi';
import { authReducer } from './authSlice';

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
};

const authConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const persistedAuth = persistReducer(authConfig, authReducer);
export const store = configureStore({
  reducer: persistedReducer,
  persistedAuth,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const addedContactId = nanoid();
store.dispatch(fetchContacts());

const newName = 'Example';
const newNumber = '1234567890';

store.dispatch(
  addContact({ id: addedContactId, name: newName, number: newNumber })
);

store.dispatch(deleteContact(addedContactId));

export const persistor = persistStore(store);
