import React from 'react';
import { connect } from 'react-redux';
import { TODO_ACTIONS, FILTER_ACTIONS } from '../store/actions';

const filters = [
  { name: 'All', type: 'ALL' },
  { name: 'Active', type: 'ACTIVE' },
  { name: 'Completed', type: 'COMPLETED' }
];

function Footer({ uncompletedTodos, selectedFilter, applyFilter, clearCompleted }) {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{uncompletedTodos}</strong>
        {` ${ uncompletedTodos === 1 ? 'item' : 'items'} left`}
      </span>

      <ul className="filters">
        {filters.map(f => (
          <li key={f.type}>
            <a
              className={selectedFilter === f.type ? 'selected': ''}
              href="#"
              onClick={() => applyFilter(f.type)}
            >
              {f.name}
            </a>
          </li>
        ))}
      </ul>
      {
        uncompletedTodos !== 0 ?
        <button
          className="clear-completed"
          onClick={() => clearCompleted()}
        >
          Clear completed
        </button> :
        null
      }
    </footer>
  );
}

export default connect(
  state => ({
    uncompletedTodos: state.todos.todos.reduce((count, todo) => count + !todo.isCompleted, 0),
    selectedFilter: state.filters.activeFilter
  }),
  dispatch => ({
    applyFilter(filter) {
      dispatch(FILTER_ACTIONS.applyFilter(filter));
    },
    clearCompleted() {
      dispatch(TODO_ACTIONS.clearCompleted())
    }
  })
)(Footer);
