/*
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// render components
ReactDOM.render(<Jumbo />, document.getElementById('jumbo'));
ReactDOM.render(<App />, document.getElementById('root'));
*/

// Before
//import { render } from 'react-dom';
//const container = document.getElementById('app');
//render(<App tab="home" />, container);

import React from 'react';
import { createRoot } from 'react-dom/client';

// import common components
import Jumbo from './components/common/Jumbo/Jumbo';
import App from './App';
import * as serviceWorker from './serviceWorker';

// After
const containerApp = document.getElementById('root');
const containerJumbo = document.getElementById('jumbo');

const rootApp = createRoot(containerApp); // createRoot(container!) if you use TypeScript
const rootJumbo = createRoot(containerJumbo); // createRoot(container!) if you use TypeScript
rootJumbo.render(<Jumbo tab="jumbo" />);
rootApp.render(<App tab="root" />);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
