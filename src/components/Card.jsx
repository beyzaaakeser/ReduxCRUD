import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import ActionTypes from '../ActionTypes';
import Modal from './Modal';
import { deleteTodo, updateTodo } from '../redux/actions';

const Card = ({ todo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = () => {
    if (!confirm('Are you sure you want to delete? ')) return;

    // dispatch({ type: ActionTypes.DELETE_TODO, payload: todo.id });
    dispatch(deleteTodo(todo.id));
  };

  const handleStatus = () => {
    const updatedTodo = { ...todo, is_done: !todo.is_done };
    const doneMessage = updatedTodo.is_done
      ? 'Todo completed'
      : 'Todo reverted';
    // dispatch({ type: ActionTypes.UPDATE_TODO, payload: updatedTodo });
    toast.info(doneMessage);
    dispatch(updateTodo(updatedTodo));
  };
  return (
    <li className="p-4 my-5 rounded border shadow-lg ">
      <h5>{todo.text}</h5>
      <h6>{todo.is_done ? 'Completed' : 'Continue'}</h6>

      <p>{todo.createdAt}</p>
      <button onClick={() => setIsOpen(true)} className="bg-primary cardBtns">
        Edit
      </button>
      <button onClick={handleStatus} className="bg-success mx-3 cardBtns">
        {todo.is_done ? 'Undo' : 'Complete'}
      </button>
      <button onClick={handleDelete} className="bg-danger cardBtns">
        Delete
      </button>
      {isOpen && <Modal close={() => setIsOpen(false)} todo={todo} />}
    </li>
  );
};

export default Card;
