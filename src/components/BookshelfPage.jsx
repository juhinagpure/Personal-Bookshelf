import React, { useEffect, useState } from 'react';
import '../App.css';

const BookshelfPage = () => {
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const storedBookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
    setBookshelf(storedBookshelf);
  }, []);

  return (
    <div className='search'>
      <h1>My Bookshelf</h1>
      <div className='container'>
        {bookshelf.length > 0 ? (
          bookshelf.map((book, index) => (
            <div key={index} className='card'>
              <div className='title'><span>Book Title: </span> {book.title}</div>
              <div className="count"><span>Edition Count: </span>{book.edition_count}</div>
            </div>
          ))
        ) : (
          <p>No books in the bookshelf.</p>
        )}
      </div>
      <a href="/">Back to Search</a>
    </div>
  );
};

export default BookshelfPage;
