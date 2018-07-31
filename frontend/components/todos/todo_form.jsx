import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    const { receiveTodo } = props;
    this.state = {
      title: '',
      body: '',
    }
  }
}
