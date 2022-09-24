import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/api';

// Actions
const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const GET_BOOKS = 'GET_BOOKS';

const initialState = {
  books: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
};

export const addNewBook = createAsyncThunk(ADD_BOOK, async (book) => {
  try {
    return await api.addNewBook(book);
  } catch (error) {
    return error.message;
  }
});

export const deleteBook = createAsyncThunk(REMOVE_BOOK, async (id) => {
  try {
    return await api.deleteBook(id);
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
        status: action.error.message,
      }))
      .addCase(addNewBook.fulfilled, (state, action) => ({
        ...state,
        books: [...state.books, action.payload],
        status: 'succeeded',
      }))
      .addCase(addNewBook.rejected, (state) => ({
        ...state,
        status: 'failed',
      }))
      .addCase(deleteBook.fulfilled, (state, action) => ({
        ...state,
        books: [...state.books.filter(({ id }) => id !== action.payload)],
        status: 'succeeded',
      }))
      .addCase(deleteBook.rejected, (state) => ({
        ...state,
        status: 'failed',
      }));
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export const allBooks = (state) => state.books.books;
export const allStatus = (state) => state.books.status;

export default booksSlice.reducer;
