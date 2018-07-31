import { RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO }  from '../actions/todo_actions';
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
    case REMOVE_TODO:
      const newState = merge({}, state);
      delete newState[action.id];
      return newState;
    case RECEIVE_TODO:
      const todo = {};
      const id = action.todo.id;
      todo[id] = action.todo;
      todo[id].done = !todo[id].done;
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
