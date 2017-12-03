import { TODO_ACTION_TYPES } from './actions';

let counter = 0;

export default function todoReducer(state, action) {
  if (state === undefined) {
    return {
      todos: [],
      editableTodo: null
    };
  }

  switch (action.type) {
    case TODO_ACTION_TYPES.TOGGLE_CHECKED:
      return {
        ...state,
        todos: state.todos.map(t => t.id === action.id ? { ...t, isCompleted: !t.isCompleted } : t)
      };

    case TODO_ACTION_TYPES.DELETE_TODO:
      return { ...state, todos: state.todos.filter(t => t.id !== action.id) };

    case TODO_ACTION_TYPES.CLEAR_COMPLETED:
      return { ...state, todos: state.todos.filter(t => !t.isCompleted) };

    case TODO_ACTION_TYPES.MAKE_TODO_EDITABLE:
      return { ...state, editableTodo: action.id };

    case TODO_ACTION_TYPES.UPDATE_TODO:
    	return {
    		...state,
    		todos: state.todos.map(t => t.id === action.id ? { ...t, text: action.text } : t)
    	};

  	case TODO_ACTION_TYPES.MARK_ALL_CHECKED:
  		return { ...state, todos: state.todos.map(t => ({ ...t, isCompleted: true }))};

		case TODO_ACTION_TYPES.ADD_TODO:
  		return {
  			...state,
  			todos: [...state.todos, { id: ++counter, text: action.text, isCompleted: false }]
			};

    default:
      return state;
  }
}
