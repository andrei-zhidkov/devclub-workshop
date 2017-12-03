import React, { Component } from 'react';

import { Provider } from 'react-redux';

import store from './store';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import 'todomvc-common/base.css';
import 'todomvc-app-css/index.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <section className="todoapp">
          <Header />
          <Main />
          <Footer />
        </section>
      </Provider>
    );
  }
}

export default App;
