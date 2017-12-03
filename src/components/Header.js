import React from 'react';
import { connect } from 'react-redux';

import { TODO_ACTIONS } from '../store/actions';

const ENTER_KEY = 13;

class Header extends React.Component {
  handleKeyPress = e => {
    const { charCode, target } = e;

    if (charCode === ENTER_KEY && !target.value.match(/^\s*$/)) {
      this.props.addTodo(target.value);
      target.value = '';
    }
  }

  render() {
    return (
      <header className="header">
        <h1>Todos</h1>
        <input
          className="new-todo"
          type="text"
          placeholder="What are you up to?"
          onKeyPress={this.handleKeyPress}
          autoFocus={true}
        />
      </header>
    );
  }
}

export default connect(
  () => ({}),
  dispatch => ({
    addTodo(text) {
      dispatch(TODO_ACTIONS.addTodo(text));
    }
  })
)(Header);
