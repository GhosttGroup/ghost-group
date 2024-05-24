import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import EmailsList from '../pages/EmailsList';

export const App = () => (
    <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/emails" element={<EmailsList />} />
    </Routes>
);
