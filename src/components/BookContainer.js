import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBooks } from '../redux/books/books';
import BooksList from './BookList';
import BookForm from './BookForm';

const BookContainer = () => {
  const books = useSelector((state) => state.books);

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
  }, []);

  return (
    <div className="book-container p-[4%]">
      <BooksList books={books} />
      <BookForm categories={categories} />
    </div>
  );
};

export default BookContainer;
