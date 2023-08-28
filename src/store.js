import { combineReducers, createStore } from 'redux';

// Reducer imports
import todoReducer from './reducers/todoReducer.js';
import { configureStore } from '@reduxjs/toolkit';

const reducers = combineReducers({ todo: todoReducer });
const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
  devTools: process.env.NODE_ENV != 'production',
});

export default store;
