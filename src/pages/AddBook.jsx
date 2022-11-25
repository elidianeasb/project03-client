import {useState} from 'react';
import axios from 'axios';

function AddBook(props) {
    const [local, setLocal] = useState("");
    const [date, setDate] = useState("");
    const [service, setService] = useState("");
    const [contact, setContact] = useState("");


    const handleLocal = (e) => setLocal(e.target.value);
    const handleDate = (e) => setDate(e.target.value);
    const handleContact = (e) => setContact(e.target.value);
    const handleService = (e) => setService(e.target.value);


    const handleSubmit = async (e) => {
        e.preventDefault(); //prevent to reload the page
        try {
            console.log({local, date, contact})
            await axios.post(`${process.env.REACT_APP_API_URL}/books`, {local, date, service:"637f9459337094a7bce8411e", contact}); //FIX THE SERVICE ID!!!!!!!

            setLocal("")
            setDate("") 
            setContact("") 
           setService("") 
            
            props.refreshBooks(); 

        } catch (error) {
            console.log(error)
        }
    }



  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="local">Local</label>
            <input type="text" name='local' value={local} onChange={handleLocal} />

            <label htmlFor="description">Date</label>
            <input type="date" name='date' value={date} onChange={handleDate} />

            
            <label htmlFor="service">Service</label>
            <input type="text" name='service' value={service} onChange={handleService} />

            
            <label htmlFor="contact">Contact</label>
            <input type="text" name='contact' value={contact} onChange={handleContact} />

            <button type="submit">Book</button>
            
        </form>
    </div>
  )
}

export default AddBook