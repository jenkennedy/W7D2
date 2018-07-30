import { RECEIVE_TODOS, RECEIVE_TODO }  from '../actions/todo_actions';
import merge from 'lodash/merge';

const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },

  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};

const todosReducer = (state = initialState, action) => {
  switch(action.type) {
    case RECEIVE_TODO:
      const todo = {};
      todo[action.todo.id] = action.todo;
      return merge(todo, state);
    case RECEIVE_TODOS:
      const todosArray = action.todos;
      const todos = {};
      todosArray.forEach(el => {
        todos[el.id] = el;
      });
      return todos;
    default:
      return state;
  }
};

export default todosReducer;
