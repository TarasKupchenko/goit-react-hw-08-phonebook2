import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import css from './ContactList.module.css';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const filteredContacts = contacts.filter(contact => {
    // Add null check to prevent accessing properties of undefined
    if (contact && contact.name) {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    }
    return false;
  });

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <ul>
      {filteredContacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <button
            className={css.contactlist_btn}
            type="button"
            onClick={() => handleDeleteContact(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
