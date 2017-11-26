import React from 'react';

class App extends React.Component {
  state = {
    counter: 0
  };

  increment = () => {
    this.setState(state => {
      return { counter: state.counter + 1 };
    });
  }

  render() {
    return (
      <div>
        <h1>Hey</h1>
        <p>{this.state.counter}</p>
        <button onClick={this.increment}>
          Click me
        </button>
      </div>
    );
  }
}

export default App;
