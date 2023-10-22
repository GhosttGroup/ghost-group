import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';

import { createBrowserHistory } from 'history';

import { App } from './pages/App';

import './stylesheets/variables.css';
import './stylesheets/reset.css';

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById('root')
);
