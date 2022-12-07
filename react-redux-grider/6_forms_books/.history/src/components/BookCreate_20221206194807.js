import { useState, useContext } from 'react';
import BooksContext from '../context/books';

const BookCreate = () => {
  const { createBook } = useContext(BooksContext);

  const [values, setValues] = useState({
    title: '',
    author: '',
    id: '',
    imageURL: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setValues({
      ...values,
      [name]: value,
      id: Math.floor(Math.random() * 9999)
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    createBook(values);
  };

  return (
    <div className='book-create'>
      <form onSubmit={submitHandler}>
        <input
          type='text'
          value={values.title}
          placeholder='enter title'
          onChange={handleChange}
          className='input'
          name='title'
          label='Title'
        />
        <input
          type='text'
          value={values.author}
          placeholder='enter author'
          onChange={handleChange}
          className='input'
          name='author'
          label='Author'
        />
        <input type='submit' value='Submit' className='button' />
      </form>
    </div>
  );
};

export default BookCreate;
