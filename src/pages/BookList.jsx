import { useState, useEffect } from "react";
import axios from "axios";



function BookList() {

  const [books, setBooks] = useState([]);

  const getAllBooks = async () => {
    try {

      const storedToken = localStorage.getItem('authToken');

      const response = await axios.get(`${process.env.REACT_APP_API_URL}/books`, {
        headers: { Authorization: `Bearer ${storedToken}` }
      });

      setBooks(response.data);
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    getAllBooks();
  }, [])

  const deleteBook = async (book) => {
    console.log(book)
    try {
      const storedToken = localStorage.getItem('authToken');

      await axios.delete(`${process.env.REACT_APP_API_URL}/books/${book._id}`, {
        headers: { Authorization: `Bearer ${storedToken}` }
      });
      getAllBooks()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <h1>List of books:</h1>
      {books && books.map(book => (
        <div key={book._id} >
          <h3>{book.local}</h3>
          <h3>{book.date}</h3>
          <h3>{book.service.name}</h3>
          <h3>{book.contact}</h3>
          <button onClick={() => deleteBook(book)}>Cancel</button>
        </div>
      )
      )}

    </div>
  )
}

export default BookList;