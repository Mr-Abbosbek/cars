import { combineReducers } from 'redux';
import { categoryReducer, typeReducer } from './reducer';

export const reducers = combineReducers({
  allCategory: categoryReducer,
  allTypes: typeReducer
});