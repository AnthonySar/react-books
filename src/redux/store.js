import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import addBooksReducer from './reducers/reducerBooks';
import reducerFetchedBooks from './reducers/reducerFetch';

const reducer = combineReducers({
  library: addBooksReducer,
  search: reducerFetchedBooks
});

const store = configureStore({
  reducer
});

export default store;