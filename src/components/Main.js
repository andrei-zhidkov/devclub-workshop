import React from 'react';
import { connect } from 'react-redux';
import { TODO_ACTIONS } from '../store/actions';

import TodoList from './TodoList';

function Main({ isAllCompleted, markAllCompleted }) {
  return (
    <section className="main">
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        onChange={markAllCompleted}
        checked={isAllCompleted}
      />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <TodoList />
    </section>
  );
}

export default connect(
  state => ({
    isAllCompleted: state.todos.todos.every(t => t.isCompleted)
  }),
  dispatch => ({
    markAllCompleted() {
      dispatch(TODO_ACTIONS.markAllChecked());
    }
  })
)(Main);
