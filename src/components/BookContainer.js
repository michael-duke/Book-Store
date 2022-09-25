import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getBooks,
  allBooks,
  allStatus,
  allMsgs,
} from '../redux/books/booksSlice';
import BooksList from './BookList';
import BookForm from './BookForm';
import Loading from './Loading';
import Toast from './Toast';

const BookContainer = () => {
  const books = useSelector(allBooks);
  const status = useSelector(allStatus);
  const message = useSelector(allMsgs);
  const categories = [
    'Action and Adventure',
    'Classics',
    'Comic Book or Graphic Novel',
    'Detective and Mystery',
    'Fantasy',
    'Historical Fiction',
    'Horror',
    'Literary Fiction',
    'Science Fiction (Sci-Fi)',
    'Short Stories',
    'Suspense and Thrillers',
    "Women's Fiction",
    'History',
    'Memoir',
    'Poetry',
    'Self-Help',
    'True Crime',
  ];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <>
      {status === 'loading' ? (
        <Loading />
      ) : (
        <div className="book-container p-[4%]">
          {message ? (
            <Toast
              title={message.title}
              author={message.author}
              action={message.action}
            />
          ) : null}

          <BooksList books={books} />
          <BookForm categories={categories} />
        </div>
      )}
    </>
  );
};

export default BookContainer;
