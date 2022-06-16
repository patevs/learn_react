import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './App';

it('renders without crashing', () => {
  // const div = document.createElement('div');
  const containerApp = document.createElement('root');
  const rootApp = createRoot(containerApp); // createRoot(container!) if you use TypeScript
  rootApp.render(<App tab="root" />);
  // ReactDOM.render(<App />, div);
  // ReactDOM.unmountComponentAtNode(div);
});
