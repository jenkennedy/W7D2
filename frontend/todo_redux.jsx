import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/store.jsx';
import { receiveTodo, receiveTodos } from './actions/todo_actions';

document.addEventListener('DOMContentLoaded', () => {
  window.store = store;
  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;
  ReactDOM.render(<h1>Todos App</h1>, document.getElementById('root'));
});
