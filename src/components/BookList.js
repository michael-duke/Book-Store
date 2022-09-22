import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const BookList = (props) => {
  const { books } = props;

  return (
    <ul className="book-list overflow-y-scroll">
      {books.map(({
        id, title, author, category,
      }) => (
        <Book key={id} id={id} title={title} author={author} category={category} />
      ))}
    </ul>
  );
};

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      author: PropTypes.string,
      category: PropTypes.string,
    }),
  ).isRequired,
};

export default BookList;
