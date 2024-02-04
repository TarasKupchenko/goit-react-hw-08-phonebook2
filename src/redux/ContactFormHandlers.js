import { useDispatch } from 'react-redux';
import { addContact } from './contactsSlice';

export const useAddContactHandler = () => {
  const dispatch = useDispatch();

  return contact => {
    dispatch(addContact(contact));
  };
};
