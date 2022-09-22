import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import {
  Button, Input, Option, Select,
} from '@material-tailwind/react';
import { addBook } from '../redux/books/books';

const BookForm = ({ categories }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const {
      target: { name, value },
    } = e;
    if (name === 'title') setTitle(value);
    if (name === 'author') setAuthor(value);
  };

  const handleCategory = (bookCategory) => {
    setCategory(bookCategory);
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    const newBook = {
      id: uuidv4(),
      title,
      author,
      category,
    };

    dispatch(addBook(newBook));

    // Sets back the input fields
    setAuthor('');
    setTitle('');
    setCategory('');
  };

  return (
    <div className="book-form border-t-2 border-divider-grey">
      <h3 className="text-warm-grey font-bold my-4 text-xl uppercase">add new book</h3>
      <div className="book-inputs flex gap-4 pro:flex-col">
        <form
          id="book-form"
          className="flex sm:flex-col sm:items-center gap-4 w-full"
          onSubmit={handleSumbit}
        >
          <Input
            className="basis-1/4"
            variant="outlined"
            size="md"
            value={title}
            label="Book title"
            name="title"
            onChange={handleChange}
            required
          />
          <Input
            className="basis-1/4"
            variant="outlined"
            size="md"
            value={author}
            label="Author"
            name="author"
            onChange={handleChange}
            required
          />
          <Select
            className="basis-1/4"
            name="category"
            label="Category"
            value={category}
            onChange={handleCategory}
            required
          >
            {categories.map((category) => (
              <Option value={category} key={category}>{category}</Option>
            ))}
          </Select>
        </form>
        <Button
          form="book-form"
          className="font-roboto-slab bg-book-blue rounded basis-3/4 whitespace-nowrap max-w-[200px] tracking-wider"
          variant="gradient"
          type="submit"
        >
          Add Book
        </Button>
      </div>
    </div>
  );
};

BookForm.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default BookForm;
