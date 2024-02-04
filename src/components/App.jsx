import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Navigation from './Navigation/Navigation';
import css from './App.module.css';

export const App = () => {
  const LoginPage = lazy(() => import('../page/Login'));
  const RegisterPage = lazy(() => import('../page/Register'));
  const ContactsPage = lazy(() => import('../page/Contacts'));

  return (
    <div className={css.container}>
      <Suspense fallback={<div>Loading Navigation...</div>}>
        <Navigation />
      </Suspense>

      <Suspense fallback={<div>Loading Contacts...</div>}>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
