import React from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

const Card = ({ todo }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    if (!confirm('Are you sure you want to delete? ')) return;

    dispatch({ type: 'DELETE', payload: todo.id });
    
  };
  const handleUpdate = () => {};
  const handleStatus = () => {
    const updatedTodo = { ...todo, is_done: !todo.is_done };
    dispatch({ type: 'UPDATE', payload: updatedTodo });
  };
  return (
    <li className="p-4 my-5 rounded border shadow-lg ">
      <h5>{todo.text}</h5>
      <h6>{todo.is_done ? 'Completed' : 'Continue'}</h6>

      <p>{todo.createdAt}</p>
      <button onClick={handleUpdate} className="bg-primary cardBtns">
        Edit
      </button>
      <button onClick={handleStatus} className="bg-success mx-3 cardBtns">
        {todo.is_done ? "Undo" : "Complete"}
      </button>
      <button onClick={handleDelete} className="bg-danger cardBtns">
        Delete
      </button>
    </li>
  );
};

export default Card;
