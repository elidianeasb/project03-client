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
      <h2 className="text-start pt-4">My Appointments</h2>
      {bookings && bookings.map(book => (
        <div key={book._id} className="container text-center">
          <div className="row">
          <div className="col text-center " >
            <h6 className="fw-lighter pt-3"><b>Local</b></h6>
            <p className="fw-lighter text-sm-start">{book.local}</p>
          </div>
          <div className="col">
            <h6 className="fw-lighter pt-3"><b>Date</b></h6>
            <p className="fw-lighter text-sm-start">{book.date}</p>
          </div>
          <div className="col">
            <h6 className="fw-lighter pt-3"><b>Service</b></h6>
            <p className="fw-lighter text-sm-start">{book.service.name}</p>
          </div>
          <div className="col">
            <h6 className="fw-lighter pt-3"><b>Hour</b></h6>
          </div>
          <div className="col">
            <h6 className="fw-lighter pt-3"><b>Contact</b></h6>
            <p className="fw-lighter text-sm-start">{book.contact}</p> {/* how get phone from this book contact?? */}

          </div>
          <div className="col">
            <h6 className="fw-lighter pt-3"><b>Status</b></h6>
            <p className="fw-lighter text-sm-start">{book.status}</p>
          </div>
          <div className="col">
            <button className="instButton" style={{width: "100px"}} onClick={() => deleteBook(book)}>Cancel</button>
          </div>
        </div>
        </div>
      )
      )}

    </div>
  )
}

export default BookList;