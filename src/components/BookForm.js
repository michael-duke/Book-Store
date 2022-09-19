import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { target: { name, value } } = e;
    if (name === 'title') setTitle(value);
    else if (name === 'author') setAuthor(value);
  };

  return (
    <>
      <h3 style={{ marginTop: '2rem' }}>ADD NEW BOOK</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addBook({
            id: uuidv4(),
            title,
            author,
          }));
        }}
        style={{ display: 'flex', gap: '2rem' }}
      >
        <input type="text" placeholder="Title" name="title" onChange={handleChange} />
        <input type="text" placeholder="Author" name="author" onChange={handleChange} />
        <button type="submit">Add Book</button>
      </form>
    </>
  );
};

export default BookForm;
