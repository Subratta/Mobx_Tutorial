import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';

import TodoList from './TodoList';
import store from './TodoStore';

const root = document.getElementById('root');
const Mobx = <TodoList store={store} />;

ReactDOM.render(
	Mobx, root
);