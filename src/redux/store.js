/*

    1) Redux kütüphanesinden creatreStore import edilir
    2) Tutulacak olan verilere göre reducerları oluştur
    3) Oluşturulan storelar combineReducers methodu ile birleştirilir
    4) Storea birleştirilen reducerlsar tanıtılır.



*/

import { combineReducers, createStore } from 'redux';
import userReducer from './reducers/userReducer';
import todoReducer from './reducers/todoReducer';

const rootReducer = combineReducers({
  todoReducer,
  userReducer,
});

const store = createStore(rootReducer);

export default store;
