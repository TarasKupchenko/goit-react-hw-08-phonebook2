import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <label className={css.filter}>
      Find contacts by name:
      <input type="text" value={filter} onChange={handleChange} />
    </label>
  );
};
