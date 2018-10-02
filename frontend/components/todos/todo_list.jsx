import React from 'react';
import TodoListItem from './todo_list_item.jsx';
import TodoForm from './todo_form.jsx';

const TodoList = ({ todos, receiveTodo, removeTodo }) => (
  <div className="main">
    <div className="main-todo-container">
      <h1 className="todo-list">All the Todos</h1>
      <ul>
        {todos.map(todo => {
          return (
            <TodoListItem
              key={todo.id}
              todo={todo}
              receiveTodo={ receiveTodo }
              removeTodo={ removeTodo }/>
          )}
        )}
      </ul>
      <TodoForm receiveTodo={ receiveTodo }/>

    </div>
  </div>
);

export default TodoList;
