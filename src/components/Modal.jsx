import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import ActionTypes from '../ActionTypes';
import { updateTodo } from '../redux/actions';
import { toast } from 'react-toastify';

const Modal = ({ todo, close }) => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const handleSave = () => {
    const newText = inputRef.current.value;
    const updated = { ...todo, text: newText };
    // dispatch({ type: ActionTypes.UPDATE_TODO, payload: updated });
    dispatch(updateTodo(updated));
    toast.info('Todo updated successfully.');
    close();
  };

  return (
    <div className="modal d-block text-dark bg-black bg-opacity-75">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header bg-red-500">
            <h5 className="modal-title">Update Todo</h5>
            <button
              type="button"
              className="btn-close"
              onClick={close}
            ></button>
          </div>
          <div className="modal-body my-3">
            <label className="form-label">New Title</label>
            <input
              ref={inputRef}
              type="text"
              defaultValue={todo.text}
              className="form-control shadow"
            />
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={close}>
              Cancel
            </button>
            <button
              onClick={handleSave}
              type="button"
              className="btn btn-primary"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
