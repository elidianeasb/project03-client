import { useState, useEffect } from "react";
import axios from "axios";



function BookList() {

  const [bookings, setBookings] = useState([]);

  const getAllBookings = async () => {
    try {

      const storedToken = localStorage.getItem('authToken');

      const response = await axios.get(`${process.env.REACT_APP_API_URL}/bookings`, {
        headers: { Authorization: `Bearer ${storedToken}` }
      });

      setBookings(response.data);
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    getAllBookings();
  }, [])

  const deleteBook = async (book) => {
    console.log(book)
    try {
      const storedToken = localStorage.getItem('authToken');

      await axios.delete(`${process.env.REACT_APP_API_URL}/bookings/${book._id}`, {
        headers: { Authorization: `Bearer ${storedToken}` }
      });
      getAllBookings()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <h1>List of bookings:</h1>
      {bookings && bookings.map(book => (
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