import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/store.jsx';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root store={store()}  />, document.getElementById('content'));
});
