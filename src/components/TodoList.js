import React from 'react';
import { connect } from 'react-redux';

import { TODO_ACTIONS } from '../store/actions';

import TodoItem from './TodoItem';

const ESC_KEY = 27;

class TodoList extends React.Component {
  handleEscape = e => e.keyCode === ESC_KEY && this.props.makeEditable(null);

  componentDidMount() {
    document.addEventListener('keydown', this.handleEscape);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleEscape);
  }

  render() {
    const { todos, editableTodo, onTodoChange, onTodoToggle, onDelete, makeEditable } = this.props;

    return (
      <ul className="todo-list">
        {todos.map(t =>
          <TodoItem
            key={t.id}
            id={t.id}
            isChecked={t.isCompleted}
            text={t.text}
            editableTodo={editableTodo}
            onChange={onTodoChange}
            onToggle={onTodoToggle}
            onDelete={onDelete}
            onMakeEditable={makeEditable}
          />
        )}
      </ul>
    );
  }
}

function filterTodos(activeFilter) {
  if (activeFilter === 'ACTIVE') {
    return t => !t.isCompleted;
  } else if (activeFilter === 'COMPLETED') {
    return t => t.isCompleted;
  } else {
    return t => !!t;
  }
}

export default connect(
  state => ({
    todos: state.todos.todos.filter(filterTodos(state.filters.activeFilter)),
    editableTodo: state.todos.editableTodo
  }),
  dispatch => ({
    onTodoChange(id, text) {
      dispatch(TODO_ACTIONS.updateTodo(id, text));
    },
    onTodoToggle(id) {
      dispatch(TODO_ACTIONS.toggleChecked(id));
    },
    onDelete(id) {
      dispatch(TODO_ACTIONS.deleteTodo(id));
    },
    makeEditable(id) {
      dispatch(TODO_ACTIONS.makeTodoEditable(id));
    }
  })
)(TodoList);
