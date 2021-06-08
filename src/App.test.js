import React from 'react';
// imports react components
import ReactDOM from 'react-dom';
// import react components for interacting with DOM
import App from './App';

// import App class that is exported from App file

it('renders without crashing', () => {
  // tests if App renders without crashing in a real browser environment
  const div = document.createElement('div');
   // creating a div to test with
  ReactDOM.render(<App />, div);
    // runs a test rendering with App and div
});
