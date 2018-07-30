import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/store.jsx';
import { receiveTodo, receiveTodos } from './actions/todo_actions';
import Root from './components/root';
import { allTodos } from './reducers/selectors.js';

document.addEventListener('DOMContentLoaded', () => {
  window.store = store;
  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;
  window.allTodos = allTodos;
  ReactDOM.render(<Root store={store}  />, document.getElementById('content'));
});
