import { useDispatch } from 'react-redux';
import { setFilter } from './filterSlice';

export const useChangeFilterHandler = () => {
  const dispatch = useDispatch();

  return e => {
    dispatch(setFilter(e.target.value));
  };
};
