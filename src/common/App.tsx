import React from 'react';
import { Route, Routes } from 'react-router';

import MainPage from '../pages/MainPage';

export const App = () => {
  return (
    <Routes>
      <Route element={<MainPage />} path={'/'} />
    </Routes>
  );
};
