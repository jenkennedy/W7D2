import TodoList from './todo_list';
import { connect } from 'react-redux';
import { allTodos } from '../../reducers/selectors.js';
import { receiveTodo, receiveTodos, removeTodo } from '../../actions/todo_actions';

const mapStateToProps = (state) => ({
  todos: allTodos(state)
});

const mapDispatchToProps = (dispatch) => ({
  removeTodo: id => (dispatch(removeTodo(id))),
  receiveTodo: todo => (dispatch(receiveTodo(todo))),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
