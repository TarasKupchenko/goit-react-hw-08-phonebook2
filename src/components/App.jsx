import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useAddContactHandler } from '../redux/ContactFormHandlers';
import { useDeleteContactHandler } from '../redux/ContactListHandlers';
import { useChangeFilterHandler } from '../redux/FilterHandlers';
import { useFilteredContacts } from '../redux/selectors';
import Navigation from './Navigation/Navigation';
import css from './App.module.css';

export const App = () => {
  const addContactHandler = useAddContactHandler();
  const deleteContactHandler = useDeleteContactHandler();
  const changeFilterHandler = useChangeFilterHandler();
  const filteredContacts = useFilteredContacts();
  const LoginPage = lazy(() => import('../page/Login'));
  const RegisterPage = lazy(() => import('../page/Register'));
  const ContactsPage = lazy(() => import('../page/Contacts'));

  return (
    <div className={css.container}>
      <Suspense fallback={<div>Loading Navigation...</div>}>
        <Navigation />
      </Suspense>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContactHandler} />
      <h2>Contacts</h2>
      <Filter onChange={changeFilterHandler} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={deleteContactHandler}
      />
      <Suspense fallback={<div>Loading Contacts...</div>}>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
