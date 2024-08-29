import ActionTypes from '../../ActionTypes';

export const addTodo = (payload) => {
  return { type: ActionTypes.ADD_TODO, payload };
};

export const updateTodo = (payload) => {
  return { type: ActionTypes.UPDATE_TODO, payload };
};

export const deleteTodo = (payload) => {
  return { type: ActionTypes.DELETE_TODO, payload };
};
