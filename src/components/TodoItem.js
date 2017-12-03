import React from 'react';

const ENTER_KEY = 13;

export default class TodoItem extends React.Component {
  handleToggle = () => this.props.onToggle(this.props.id);
  handleDestroy = () => this.props.onDelete(this.props.id);
  toggleEditing = () => this.props.onMakeEditable(this.props.id);
  handleChange = e => this.props.onChange(this.props.id, e.target.value);
  handleKeypress = e => e.charCode === ENTER_KEY && this.props.onMakeEditable(null);

  render() {
    const { id, isChecked, text, editableTodo } = this.props;
    let className = '';

    if (isChecked) {
      className += 'completed';
    }

    if (id === editableTodo) {
      className += ' editing';
    }

    return (
      <li className={className} onDoubleClick={this.toggleEditing}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={isChecked}
            onChange={this.handleToggle}
          />
          <label>{text}</label>
          <button className="destroy" onClick={this.handleDestroy} />
        </div>
        <input
          className="edit"
          type="text"
          value={text}
          onChange={this.handleChange}
          onKeyPress={this.handleKeypress}
        />
      </li>
    );
  }
}
