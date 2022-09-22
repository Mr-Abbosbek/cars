import { ActionTypes } from "../contents/productActions"

export const setCategory = (categories) => {
  return {
    type: ActionTypes.SET_CATEGORY,
    payload: categories,
  }
}

export const addProduct = (category) => {
  return {
    type: ActionTypes.ADD_PRODUCT,
    payload: category,
  }
}

export const updateProduct = (category) => {
  return {
    type: ActionTypes.UPDATE_PRODUCT,
    payload: category,
  }
}

export const deleteProduct = (id) => {
  return {
    type: ActionTypes.DELETE_PRODUCT,
    payload: id,
  }
}



// ========================================================================



export const setType = (types) => {
  return {
    type: ActionTypes.SET_TYPE,
    payload: types,
  }
}

export const setSelectedType = (type) => {
  return {
    type: ActionTypes.SELECTED_TYPE,
    payload: type,
  }
}


// ========================================================================


export const setAllType = (type) => {
  return {
    type: ActionTypes.SET_ALL_TYPE,
    payload: type,
  }
}

export const addType = (type) => {
  return {
    type: ActionTypes.ADD_TYPE,
    payload: type,
  }
}

export const updateType = (type) => {
  return {
    type: ActionTypes.UPDATE_TYPE,
    payload: type,
  }
}

export const deleteType = (id) => {
  return {
    type: ActionTypes.DELETE_TYPE,
    payload: id,
  }
}


// ========================================================================

