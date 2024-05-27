import * as actionTypes from './actionTypes';

export const createToDo = (todo) => {
  return {
    type: actionTypes.CREATE_NEW_TODO,
    payload: todo,
  };
};

export const deleteToDo = (id) => {
  return {
    type: actionTypes.DELETE_TODO,
    payload: id,
  };
};
