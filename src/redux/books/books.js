import api from '../../api/api';
// Actions
const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const GET_BOOKS = 'GET_BOOKS';
const LOADING_BOOKS = 'LOADING_BOOKS';
const BOOKS_LOADED = 'BOOKS_LOADED';

const initialState = {
  books: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
};

// Reducer
const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return { ...state, books: [...state.books, action.book] };
    case REMOVE_BOOK:
      return { ...state, books: [...state.books.filter(({ id }) => id !== action.bookId)] };
    case LOADING_BOOKS:
      return { ...state, status: action.status };
    case GET_BOOKS:
      return { ...state, books: action.books };
    case BOOKS_LOADED:
      return { ...state, status: action.status };
    default:
      return state;
  }
};

// Action Creators
export const addBook = (book) => async (dispatch) => {
  api.addNewBook(book);
  dispatch({ type: ADD_BOOK, book });
};

export const removeBook = (bookId) => async (dispatch) => {
  api.deleteBook(bookId);
  dispatch({ type: REMOVE_BOOK, bookId });
};

export const getBooks = () => async (dispatch) => {
  dispatch({ type: LOADING_BOOKS, status: 'loading' });
  const books = await api.fetchBooks();
  dispatch({ type: GET_BOOKS, books });
  dispatch({ type: BOOKS_LOADED, status: 'succeeded' });
};

export const allBooks = (state) => state.books.books;
export const allStatus = (state) => state.books.status;

export default booksReducer;
