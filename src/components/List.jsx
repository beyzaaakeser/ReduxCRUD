import React from 'react';
import { useSelector } from 'react-redux';
import Card from './Card';

const List = () => {
  const { todos } = useSelector((store) => store.todoReducer);

  console.log(todos);
  return (
    <ul className=' list-unstyled rounded'>
      {todos.map((todo) => (
        <Card key={todo.id} todo={todo}/>
      ))}
    </ul>
  );
};

export default List;
