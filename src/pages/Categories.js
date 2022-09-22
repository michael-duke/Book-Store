import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@material-tailwind/react';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const status = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const handleStatus = () => dispatch(checkStatus());

  return (
    <div className="category-status flex flex-col items-center py-20">
      <p className="text-xl capitalize text-opaque-grey/70 tracking-widest">{status}</p>
      <Button
        className="font-roboto-slab bg-book-blue rounded tracking-wider"
        variant="gradient"
        onClick={handleStatus}
      >
        Check Status
      </Button>
    </div>
  );
};

export default Categories;
