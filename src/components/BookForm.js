import React from 'react';

const BookForm = () => {
  return (
    <form>
      <input type="text" placeholder="Title" />
      <input type="text" placeholder="Author" />
      <button type="button">Add Book</button>
    </form>
  );
};

export default BookForm;
