import React from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import ActionTypes from '../ActionTypes';
import { addTodo } from '../redux/actions';
const Form = () => {
  // Actionları reducera ileeten methodun Reduxta kurulumu bu şekilde.
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();

    const text = e.target[0].value.trim();

    if (!text) return toast.warn('Please enter the content');

    // dispatch({ type: ActionTypes.ADD_TODO, payload: text });
    dispatch(addTodo(text));
    e.target.reset();
  };
  return (
    <form onSubmit={handleSubmit} className="d-flex gap-3 my-5">
      <input
        type="text"
        className="form-control"
        placeholder="Create Todo Item"
      />
      <button className="btn btn-warning">Submit</button>
    </form>
  );
};

export default Form;
