import { combineReducers } from 'redux';
import searchReducer from './searchReducer';
import index from './index';

export default combineReducers({
  cards: searchReducer,
  cards: index
});