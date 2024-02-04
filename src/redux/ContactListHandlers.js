import { useDispatch } from 'react-redux';
import { deleteContact } from './contactsSlice';

export const useDeleteContactHandler = () => {
  const dispatch = useDispatch();

  return contactId => {
    dispatch(deleteContact(contactId));
  };
};
