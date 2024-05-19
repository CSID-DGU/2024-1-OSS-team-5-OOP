import React from 'react';
import ReactDOM from 'react-dom';
import BlockPage from './BlockPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BlockPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});