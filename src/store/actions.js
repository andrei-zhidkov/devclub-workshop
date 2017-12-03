export const TODO_ACTION_TYPES = {
  ADD_TODO: 'ADD_TODO',
  UPDATE_TODO: 'UPDATE_TODO',
  DELETE_TODO: 'DELETE_TODO',
  TOGGLE_CHECKED: 'TOGGLE_CHECKED',
  CLEAR_COMPLETED: 'CLEAR_COMPLETED',
  MAKE_TODO_EDITABLE: 'MAKE_TODO_EDITABLE',
  MARK_ALL_CHECKED: 'MARK_ALL_CHECKED'
}

export const FILTER_ACTION_TYPES = {
  APPLY_FILTER: 'APPLY_FILTER'
};

export const TODO_ACTIONS = {
  addTodo(text) {
    return { type: TODO_ACTION_TYPES.ADD_TODO, text };
  },

  updateTodo(id, text) {
    return { type: TODO_ACTION_TYPES.UPDATE_TODO, id, text };
  },

  deleteTodo(id) {
    return { type: TODO_ACTION_TYPES.DELETE_TODO, id };
  },

  toggleChecked(id) {
    return { type: TODO_ACTION_TYPES.TOGGLE_CHECKED, id };
  },

  clearCompleted() {
    return { type: TODO_ACTION_TYPES.CLEAR_COMPLETED };
  },

  makeTodoEditable(id) {
    return { type: TODO_ACTION_TYPES.MAKE_TODO_EDITABLE, id };
  },

  markAllChecked() {
    return { type: TODO_ACTION_TYPES.MARK_ALL_CHECKED };
  }
};

export const FILTER_ACTIONS = {
  applyFilter(filter) {
    return { type: FILTER_ACTION_TYPES.APPLY_FILTER, filter };
  }
};
