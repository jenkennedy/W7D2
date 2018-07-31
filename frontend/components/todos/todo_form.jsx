import React from 'react';
import { uniqId } from '../../util/todo_utils.js';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: uniqId(),
      title: '',
      body: '',
    };
    this.handleInput = this.handleInput.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  handleInput (e) {
    const field = e.currentTarget.name;
    const value = e.currentTarget.value;
    this.setState({[field]: value});
  }

  addTodo () {
    this.props.receiveTodo(this.state);
    this.setState({
      id: uniqId(),
      title: '',
      body: '',
    });
  }

  render () {
    return (
      <div>
        <input type='text' name='title' onChange={this.handleInput} value={this.state.title}></input>
        <input type='text' name='body' onChange={this.handleInput} value={this.state.body}></input>
        <button onClick={this.addTodo}>Add Todo!</button>
      </div>
    );
  }
}

export default TodoForm;
