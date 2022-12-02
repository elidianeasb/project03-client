import { useState, useEffect } from "react";
import axios from "axios";
import Booking from "../components/Booking";

function ClientBookings() {

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
  return (
    <div className="list ms-4 me-4 pt-5 pb-4 mt-5">
      <h3 className="text-start pt-4">My Appointments</h3>
      <hr />
      <div className="d-flex justify-content-between ms-4 me-4 text-secondary">
        <h6>Service</h6>
        <h6>Date</h6>
        <h6>Hour</h6>
        <h6>Status</h6>
      </div>
      <hr />

      {bookings && bookings.map(book => (
        <div className="ms-4 me-4">
          <Booking book={book} cancelBook={cancelBook} showAccept={false} />
          <hr />
        </div>
      )
      )}
    </div >
  )
}
export default ClientBookings;