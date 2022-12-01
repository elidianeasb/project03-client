import { useState, useEffect } from "react";
import axios from "axios";
import Booking from "../components/Booking";


function AdminBookings(props) {
  const [bookings, setBookings] = useState([]);
  const { book } = props

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

  const cancelBook = async (book) => {
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

  const acceptBook = async (book) => {
    console.log(book)
    try {
      const storedToken = localStorage.getItem('authToken');

      await axios.put(`${process.env.REACT_APP_API_URL}/bookings/${book._id}/accept`, null, {
        headers: { Authorization: `Bearer ${storedToken}` }
      });
      getAllBookings()
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <div className="list">
        <h2 className="text-start pt-4">My Appointments</h2>
        <hr />
        {bookings && bookings.map(book => (
            <Booking book={book} cancelBook={cancelBook} acceptBook={acceptBook} showAccept={true} />
        )
        )}
      </div>
    </div>
  )
}

export default AdminBookings