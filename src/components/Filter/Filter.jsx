import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/slices/filterSlice';
import styles from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <input
      type="text"
      onChange={handleChange}
      placeholder="Search contacts"
      className={styles.input}
    />
  );
};

export default Filter;