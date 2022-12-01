import { useState, useEffect } from "react";
import axios from "axios";
import Card from 'react-bootstrap/Card'

function Booking(props) {
  const { book, cancelBook, acceptBook, showAccept } = props

  const canAccept = book.status === 'pending'

  const canCancel = book.status !== 'canceled'


  return (
    <Card>
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
            <h6 className="fw-lighter pt-3"><b>Status</b></h6>
            <p className="fw-lighter text-sm-start">{book.status}</p>
          </div>
          <div className="col">
            {canCancel && (
              <button className="instButton" style={{ width: "150px" }} onClick={() => cancelBook(book)}>Cancel</button>
            )}
            {showAccept && canAccept && (
              <button className="instButton" style={{ width: "150px" }} onClick={() => acceptBook(book)}>Accept</button>
            )}
          </div>
        </div>
      </div>
    </Card>
  )
}

export default Booking