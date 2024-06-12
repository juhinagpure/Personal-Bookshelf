
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookSearchPage from './components/BookSearchPage.jsx';
import BookshelfPage from './components/BookshelfPage.jsx';
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<BookSearchPage />} />
        <Route path="/bookshelf" element={<BookshelfPage />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
