import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from '@material-tailwind/react';
import { removeBook } from '../redux/books/books';
import styles from './Book.module.css';

const Book = (props) => {
  const {
    id, title, author, category,
  } = props;
  const dispatch = useDispatch();

  const handleRemove = () => dispatch(removeBook(id));

  return (
    <li className="flex flex-wrap sm:flex-col sm:gap-10 items-center justify-between bg-white mb-8 border border-bd-grey rounded p-8 sl:p-[5%]">
      <div className="book-details">
        <div className="book-info capitalize font-roboto-slab font-bold">
          <h4 className="font-sans text-opaque-grey opacity-50">{category}</h4>
          <h2 className="text-xl">{title}</h2>
          <h3 className="font-normal text-author-blue">{author}</h3>
        </div>

        <div className="book-actions flex divide-x font-roboto-slab font-light text-author-blue mt-5">
          <button className="bg-transparent pr-3 hover:text-gray-500" type="button">
            Comment
          </button>
          <button className="bg-transparent px-3 hover:text-red-500" type="button" onClick={handleRemove}>
            Remove
          </button>
          <button className="bg-transparent px-3 hover:text-amber-500" type="button">
            Edit
          </button>
        </div>
      </div>

      <div className="progress-container flex sm:flex-col items-center gap-4 pr-16">
        <div className="percent-stats flex gap-4">
          <div className={styles.CircularProgress} />
          <div className="progress-stats">
            <h3 className="font-normal text-3xl">
              {Math.trunc(Math.random() * 100)}
              %
            </h3>
            <span className="text-opaque-grey opacity-50">Completed</span>
          </div>
        </div>
        <div className="divider-chapter flex">
          <div className={styles.DividerProgress} />
          <div className="current-chapter flex flex-col font-roboto-slab font-light text-opaque-grey">
            <span className="block uppercase opacity-50">current chapter</span>
            <span className="block capitalize mb-5">chapter 17</span>
            <Button
              className="py-2 font-roboto-slab font-light bg-book-blue rounded whitespace-nowrap max-w-[200px] tracking-wider"
              variant="gradient"
            >
              update progress
            </Button>
          </div>
        </div>

      </div>

    </li>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
