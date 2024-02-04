// ContactsPage.jsx
import React from 'react';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { ContactList } from '../components/ContactList/ContactList';
import { Filter } from '../components/Filter/Filter';
import { useAddContactHandler } from '../redux/ContactFormHandlers';
import { useDeleteContactHandler } from '../redux/ContactListHandlers';
import { useChangeFilterHandler } from '../redux/FilterHandlers';
import { useFilteredContacts } from '../redux/selectors';

const ContactsPage = () => {
  const addContactHandler = useAddContactHandler();
  const deleteContactHandler = useDeleteContactHandler();
  const changeFilterHandler = useChangeFilterHandler();
  const filteredContacts = useFilteredContacts();

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContactHandler} />
      <h2>Contacts</h2>
      <Filter onChange={changeFilterHandler} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={deleteContactHandler}
      />
    </>
  );
};

export default ContactsPage;
