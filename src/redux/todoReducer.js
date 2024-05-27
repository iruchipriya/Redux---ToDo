import * as actionTypes from './actionTypes';

const initState = {
  todos: [],
};
const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_NEW_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case actionTypes.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo, id) => id != action.payload),
      };
    default:
      return state;
  }
};

export default todoReducer;
