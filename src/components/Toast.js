import { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Alert } from '@material-tailwind/react';
import { setAdded, setRemoved } from '../redux/books/booksSlice';

export default function Toast({ title, author, action }) {
  const [show, setShow] = useState(true);
  const dispatch = useDispatch();

  return (
    <>
      <Alert
        className={action === 'ADD' ? undefined : 'bg-red-600'}
        show={show}
        animate={{
          mount: { y: 0 },
          unmount: { y: 100 },
        }}
        dismissible={{
          onClose: () => {
            if (action === 'ADD') dispatch(setAdded());
            else if (action === 'DEL')dispatch(setRemoved());
            setShow(false);
          },
        }}
      >
        {action === 'ADD'
          ? (
            <p>
              <span className="underline bg-blue-gray-400 decoration-white">{title}</span>
              {' '}
              by
              {' '}
              <span className="italic decoration-blue-gray-400">{author}</span>
              {' '}
              added. Kindly close me 😊
            </p>
          )
          : (
            <p>
              <span className="underline decoration-blue-gray-200">{title}</span>
              {' '}
              by
              {' '}
              <span className="italic decoration-blue-gray-200">{author}</span>
              {' '}
              removed. Kindly close me 😊
            </p>
          )}
      </Alert>
    </>
  );
}

Toast.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  action: PropTypes.string.isRequired,
};
