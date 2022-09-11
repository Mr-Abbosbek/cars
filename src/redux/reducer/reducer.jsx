import { ActionTypes } from "../contents/productActions";

const initialState = {
  category: [],
  typeDate: []
}

export const categoryReducer = (state = initialState, {type, payload}) => {
  switch(type){
    case ActionTypes.SET_CATEGORY:
      return { ...state, category: payload };
    case ActionTypes.ADD_CATEGORY:
      return {...state, category: [...state.category, payload]};
    case ActionTypes.UPDATE_CATEGORY:
      return {...state, category: state.category.map(product => product.id === payload.id ? payload : product)};
    case ActionTypes.DELETE_CATEGORY:
      return {...state, category: state.category.filter(product => product.id !== payload)};
      default:
        return state;
  }
}

export const typeReducer = (state = initialState, {type, payload}) => {
  switch(type){
    case ActionTypes.SET_TYPE:
      return { ...state, typeDate: payload };
    case ActionTypes.ADD_TYPE:
      return {...state, typeDate: [...state.typeDate, payload]};
    case ActionTypes.UPDATE_TYPE:
      return {...state, typeDate: state.typeDate.map(product => product.id === payload.id ? payload : product)};
    case ActionTypes.DELETE_TYPE:
      return {...state, typeDate: state.typeDate.filter(product => product.id !== payload)};
      default:
        return state;
  }
}