import React from 'react';
import { Route, Switch } from 'react-router';

import MainPage from './MainPage';

export const App = () => (
  <Switch>
    <Route path='/' render={() => <MainPage />} />
  </Switch>
);
