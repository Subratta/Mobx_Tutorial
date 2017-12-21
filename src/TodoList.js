import React from 'react';
import { observer } from 'mobx-react';

@observer
class TodoList extends React.Component {
	render() {
		console.log(this.props.store);
		const { todos } = this.props.store;
		console.log(todos);
		return(
			<div>
				<h1>Welcome to MobX!</h1>
				 <h1>{this.props.store.todos[0]}</h1>
			</div>
		);
	}
}

export default TodoList;