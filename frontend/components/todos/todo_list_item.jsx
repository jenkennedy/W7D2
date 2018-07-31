import React from 'react';

const TodoListItem = ({ todo, receiveTodo, removeTodo }) => (
  <li>
    {todo.title}: {todo.body} <button onClick={()=> receiveTodo(todo)}>{todo.done ? 'Undo' : 'Done'}</button> <button onClick={() => removeTodo(todo.id)}>Delete</button>
  </li>
);

export default TodoListItem;
