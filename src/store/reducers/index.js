import { combineReducers } from 'redux';
import user from './userReducer';
import news from './newsReducer';

const rootReducer = combineReducers({
  user,
  news
});

export default rootReducer;
