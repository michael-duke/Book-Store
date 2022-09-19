import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/books';

const Book = (props) => {
  const { id, title, author } = props;
  const dispatch = useDispatch();

  return (
    <li>
      <h2>
        {title}
        {' '}
        by
        {' '}
        {author}
      </h2>
      <button type="button" onClick={() => dispatch(removeBook(id))}>Remove</button>
    </li>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
