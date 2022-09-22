import { ActionTypes } from "../contents/productActions";

const initialState = {
  category: []
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


const initialType = {
  typeDate: []
}


export const typeReducer = (state = initialType, {type, payload}) => {
  switch(type){
    case ActionTypes.SET_TYPE:
      return { ...state, typeDate: payload };
    case ActionTypes.SELECTED_TYPE:
        return {...state, ...payload};
    default:
        return state;
  }
}

const initialAllType = {
  allTypeDate: []
}

export const allTypeReducer = (state = initialAllType, {type, payload}) => {
  switch(type){
    case ActionTypes.SET_ALL_TYPE:
      return { ...state, allTypeDate: payload };
    case ActionTypes.ADD_TYPE:
      return {...state, allTypeDate: [...state.allTypeDate, payload]};
    case ActionTypes.UPDATE_TYPE:
      return {...state, allTypeDate: state.allTypeDate.map(t => t.id === payload.id ? payload : t)};
    case ActionTypes.DELETE_TYPE:
      return {...state, allTypeDate: state.allTypeDate.filter(t => t.id !== payload)};
    default:
        return state;
  }
}