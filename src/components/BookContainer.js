import React from 'react';
import { useSelector } from 'react-redux';
import BooksList from './BookList';
import BookForm from './BookForm';

const BookContainer = () => {
  const books = useSelector((state) => state.books);

  return (
    <>
      <BooksList books={books} />
      <BookForm />
    </>
  );
};

export default BookContainer;
