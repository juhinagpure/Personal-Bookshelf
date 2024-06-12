import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookCard from './BookCard.jsx';
import '../App.css';

const BookSearchPage = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const storedBookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
    setBookshelf(storedBookshelf);
  }, []);

  const handleSearch = async (e) => {
    setQuery(e.target.value);
    if (e.target.value.length > 2) {
      const response = await axios.get(`https://openlibrary.org/search.json?q=${e.target.value}&limit=10&page=1`);
      setResults(response.data.docs);
    } else {
      setResults([]);
    }
  };

  const addToBookshelf = (book) => {
    const newBookshelf = [...bookshelf, book];
    setBookshelf(newBookshelf);
    localStorage.setItem('bookshelf', JSON.stringify(newBookshelf));
  };

  return (
    <div className='search'>
      <h1>Search by book name</h1>
      <a href="/bookshelf">My Bookshelf</a>
      <input type="text" value={query} onChange={handleSearch} placeholder="Enter book name" />
      <div className='container'>
        {results.map((book) => (
          <BookCard
            key={book.key}
            book={book}
            addToBookshelf={addToBookshelf}
            isAdded={bookshelf.some(b => b.key === book.key)}
          />
        ))}
      </div>
    </div>
  );
};

export default BookSearchPage;
