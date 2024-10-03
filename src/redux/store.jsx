import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactsReducer from './slices/contactsSlice';
import filterReducer from './slices/filterSlice';


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['contacts']  
};

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer
});

export const persistor = persistStore(store);
export default store;