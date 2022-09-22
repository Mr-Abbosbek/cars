import { combineReducers } from 'redux';
import { allTypeReducer, categoryReducer, typeReducer } from './reducer';

export const reducers = combineReducers({
  allCategory: categoryReducer,
  allTypes: typeReducer,
  allType: allTypeReducer
});