import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/api';

// Actions
const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const GET_BOOKS = 'GET_BOOKS';

const initialState = {
  books: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
  msg: null,
};

export const addNewBook = createAsyncThunk(ADD_BOOK, async (book) => {
  try {
    await api.addNewBook(book);
    return { book };
  } catch (error) {
    return error.message;
  }
});

export const deleteBook = createAsyncThunk(REMOVE_BOOK, async (id) => {
  try {
    await api.deleteBook(id);
    return { id };
  } catch (error) {
    return error.message;
  }
});

export const getBooks = createAsyncThunk(GET_BOOKS, async () => {
  try {
    return await api.fetchBooks();
  } catch (error) {
    return error.message;
  }
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => ({
      ...state,
      books: [...state.books, action.payload],
    }),
    removeBook: (state, action) => ({
      ...state,
      books: [...state.books.filter(({ id }) => id !== action.payload)],
    }),
    setAdded: (state) => ({
      ...state,
      msg: null,
    }),
    setRemoved: (state) => ({
      ...state,
      msg: null,
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(getBooks.fulfilled, (state, action) => ({
        ...state,
        books: action.payload,
        status: 'succeeded',
      }))
      .addCase(getBooks.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }))
      .addCase(addNewBook.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(addNewBook.fulfilled, (state, action) => ({
        ...state,
        books: [...state.books, action.payload.book],
        status: 'succeeded',
        msg: { ...action.payload.book, action: 'ADD' },
      }))
      .addCase(addNewBook.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }))
      .addCase(deleteBook.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(deleteBook.fulfilled, (state, action) => ({
        ...state,
        books: [...state.books.filter(({ id }) => id !== action.payload.id)],
        status: 'succeeded',
        msg: { ...state.books.find(({ id }) => id === action.payload.id), action: 'DEL' },
      }))
      .addCase(deleteBook.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }));
  },
});

export const { setAdded, setRemoved } = booksSlice.actions;

export const allBooks = (state) => state.books.books;
export const allStatus = (state) => state.books.status;
export const allMsgs = (state) => state.books.msg;

export default booksSlice.reducer;
