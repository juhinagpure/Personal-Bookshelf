
import React from 'react';

const BookCard = ({ book, addToBookshelf, isAdded }) => {
  return (
    <div className='card'>
      <div className='title'><span>Book Title: </span>{book.title}</div>
      <div className="count"><span>Edition Count: </span>{book.edition_count}</div>
      {!isAdded && <button onClick={() => addToBookshelf(book)}>Add to Bookshelf</button>}
    </div>
  );
};

export default BookCard;
