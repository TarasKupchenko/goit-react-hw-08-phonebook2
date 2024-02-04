// FilterSelectors.js
import { useSelector } from 'react-redux';
export const selectContacts = state => state.contacts;

export const useFilteredContacts = () => {
  const selectContacts = useSelector(state => state.contacts);
  const selectFilter = useSelector(state => state.filter);

  return selectContacts.filter(contact => {
    if (contact && contact.name) {
      return contact.name.toLowerCase().includes(selectFilter.toLowerCase());
    }
    return false;
  });
};
