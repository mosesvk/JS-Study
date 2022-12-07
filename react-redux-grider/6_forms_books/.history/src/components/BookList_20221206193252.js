import { useContext } from 'react';
import BookShow from './BookShow';
import BooksContext from '../context/books';

const BookList = ({ books, onDelete, onEdit }) => {

  const renderedBooks = books.map((book) => (
    <BookShow key={book.id} book={book} onDelete={onDelete} onEdit={onEdit} />
  ));

  return (
    <div className='book-list'>
      {renderedBooks}
    </div>
  );
};

export default BookList;
