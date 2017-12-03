import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { filterReducer } from './store';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

describe('Filter reducer', () => {
  it('returns initial state', () => {
    expect(filterReducer(undefined, { type: 'RANDOM_ACTION' })).toEqual({ activeFilter: 'ALL' });
  });

  it('changes filter to passed', () => {
    expect(filterReducer({ activeFilter: 'ALL'}, { type: 'APPLY_FILTER', filter: 'NOT_ALL' }))
      .toEqual({ activeFilter: 'NOT_ALL' });
  });
});
