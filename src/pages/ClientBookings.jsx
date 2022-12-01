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
      <div className="list">
        <h4 className="text-start pt-4">My Appointments</h4>
        <hr />
        <div className="d-flex justify-content-between" >
          <h6><b>Service</b></h6>
          <h6><b>Date</b></h6>
          <h6><b>Hour</b></h6>
          <h6><b>Status</b></h6>
        </div>
      {bookings && bookings.map(book => (
        <Booking book={book} cancelBook={cancelBook} showAccept={false} />
      )
      )}
    </div >
  )
}
export default ClientBookings;