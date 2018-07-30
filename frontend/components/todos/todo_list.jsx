import React from 'react';
import TodoListItem from './todo_list_item.jsx';

const TodoList = ({todos, receiveTodo}) => (
  <ul>
    {todos.map(todo => <TodoListItem key={todo.id} todo={todo}/>)}
  </ul>
);

export default TodoList;
