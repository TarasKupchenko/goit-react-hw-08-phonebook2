import React from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useAddContactHandler } from '../redux/ContactFormHandlers';
import { useDeleteContactHandler } from '../redux/ContactListHandlers';
import { useChangeFilterHandler } from '../redux/FilterHandlers';
import { useFilteredContacts } from '../redux/selectors';
import css from './App.module.css';

export const App = () => {
  const addContactHandler = useAddContactHandler();
  const deleteContactHandler = useDeleteContactHandler();
  const changeFilterHandler = useChangeFilterHandler();
  const filteredContacts = useFilteredContacts();

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContactHandler} />
      <h2>Contacts</h2>
      <Filter onChange={changeFilterHandler} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={deleteContactHandler}
      />
    </div>
  );
};
