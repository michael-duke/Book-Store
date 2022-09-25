import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@material-tailwind/react';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const status = useSelector((state) => state.categories);
  const [categoryStatus, setCategoryStatus] = useState(status);

  const dispatch = useDispatch();
  const currentStatus = categoryStatus.length > 0 ? '' : 'under construction';

  const handleStatus = () => {
    setCategoryStatus(currentStatus);
    dispatch(checkStatus(currentStatus));
  };

  return (
    <div className="category-status flex flex-col items-center py-20">
      {categoryStatus.length > 0
        ? (
          <div className="flex items-baseline">
            <p className="text-xl capitalize text-opaque-grey/70 tracking-widest">
              {categoryStatus}
            </p>
            <div className="spinner-grow inline-block w-4 h-4 bg-current rounded-full opacity-0 text-blue-gray-600" role="status">
              <span className="visually-hidden">Status Loading...</span>
            </div>
          </div>
        )
        : categoryStatus}
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
