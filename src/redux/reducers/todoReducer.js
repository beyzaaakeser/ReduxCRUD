/*
 * reducer statin nasıl değişeceğine karar verir
 * reducer normal bir fonksiyondur ve 2 parametre alır.
 * state : reducerda tutulan verinin son durumu
 * action :  styatin nasıl değişmesi gerektiğini söleyen nesne
 *
 * Not: Reducer fonksiyonunda return edilen veri statin son hali olur.
 *
 * Not-2 : useReducerdan farklı olarak
 * initialStatei state parametresine varsayılan değer olarak atarız.
 */
import { toast } from 'react-toastify';
import { v4 } from 'uuid';
const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  console.log('todo reducera geldi', action);
  switch (action.type) {
    case 'ADD':
      const newTodo = {
        id: v4(),
        text: action.payload,
        is_done: false,
        createdAt: new Date().toLocaleDateString(),
      };

      const added = state.todos.concat(newTodo);

      toast.success('Todo created successfully.');

      return { todos: added };

    case 'DELETE':
      const filtredTodos = state.todos.filter(
        (todo) => todo.id !== action.payload
      );

      toast.error('Todo deleted successfully');
      return { todos: filtredTodos };

    case 'UPDATE':
      const updated = state.todos.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
      
      return { todos: updated };
    default:
      return state;
  }
};

export default todoReducer;
