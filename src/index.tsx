import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { App } from './common/App';

import './stylesheets/variables.css';
import './stylesheets/reset.css';

const container = document.getElementById('root');
const root = createRoot(container as Element);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);