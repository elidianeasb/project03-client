import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

function BookList() {

    const [books, setBooks] = useState([]);

    const getAllBooks = async () => {      
        try {
            
            const storedToken = localStorage.getItem('authToken');

            const response = await axios.get(`${process.env.REACT_APP_API_URL}/books`, {
                headers: {Authorization: `Bearer ${storedToken}`} 
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
    
return (
    <div>
      <h1>List of books:</h1>
        {books.user.map((book) => {
          return (
            <div key={book._id} >
              <h3>{book.name}</h3>
            </div>
          );
        })}     
       
    </div>
  )
}

export default BookList;