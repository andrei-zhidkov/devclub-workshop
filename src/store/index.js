import { createStore, combineReducers } from 'redux';

import { FILTER_ACTION_TYPES } from './actions';
import todoReducer from './todos';

export function filterReducer(state = { activeFilter: 'ALL' }, action) {
  switch (action.type) {
    case FILTER_ACTION_TYPES.APPLY_FILTER:
      return { ...state, activeFilter: action.filter };

    default:
      return state;
  }
}

export default createStore(
  combineReducers({ todos: todoReducer, filters: filterReducer })
);
