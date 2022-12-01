import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import moment from 'moment'
import React, {useState, useEffect} from 'react'

function Booking(props) {
  const { book, cancelBook, acceptBook, showAccept } = props

  const canAccept = book.status === 'pending'
  const canCancel = book.status !== 'canceled'

const [statusColor, setStatusColor] = useState('')

const getStatus = () => {
  if (book.status === 'canceled'){
    return setStatusColor('red')
  }else if(book.status === 'accepted'){
    return setStatusColor
  }
}

useEffect(() => {
  getStatus()
}, [])

 
  console.log(book.user)

  return (
    <div>
      <div key={book._id} className="d-flex justify-content-between">
            <p className="fw-lighter text-sm-start">{book.service.name}</p>
            <p className="fw-lighter text-sm-start">{moment(book.date).format('L')}</p>
            <p className="fw-lighter text-sm-start">{book.hour}</p>
            <p className="fw-lighter text-sm-start" style={{color: `${statusColor}`}}>{(book.status)}</p>
      </div>
      <div className='d-flex justify-content-end'>
        {canCancel && (
          <button className="statusButton" style={{ width: "12vw"}} onClick={() => cancelBook(book)}>Cancel</button>
        )}
        {showAccept && canAccept && (
          <button className="statusButtonAccept" style={{ width: "12vw"}} onClick={() => acceptBook(book)}>Accept</button>
        )}
      </div>
      <hr />
    </div>
  )
}

export default Booking