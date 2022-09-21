import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBooks } from '../redux/books/books';
import BooksList from './BookList';
import BookForm from './BookForm';

const BookContainer = () => {
  const books = useSelector((state) => state.books);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  return (
    <>
      <BooksList books={books} />
      <BookForm />
    </>
  );
};

export default BookContainer;
