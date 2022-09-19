import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const status = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  return (
    <>
      <p>{status}</p>
      <button
        type="button"
        onClick={() => {
          dispatch(checkStatus());
        }}
      >
        Check status
      </button>
    </>
  );
};

export default Categories;
