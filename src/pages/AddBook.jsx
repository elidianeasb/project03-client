import {useState} from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

function AddBook(props) {
    const [local, setLocal] = useState("home");
    const [date, setDate] = useState("");
    const [service, setService] = useState("63848c969d7a6aa319a6fed9");
    const [contact, setContact] = useState("");
    const [status, setStatus] = useState("pending");


    const handleLocal = (e) =>setLocal(e.target.value);    
    const handleDate = (e) => setDate(e.target.value);
    const handleContact = (e) => setContact(e.target.value);
    const handleService = (e) => setService(e.target.value);
    const handleStatus = (e) => setStatus(e.target.value);


    const handleSubmit = async (e) => {
        e.preventDefault(); //prevent to reload the page
        try {
            const storedToken = localStorage.getItem('authToken');

            
            await axios.post(`${process.env.REACT_APP_API_URL}/bookings`, {local, date, service, contact, status}, {
                headers: {Authorization: `Bearer ${storedToken}`} 
            } );
            
            setLocal("")
            setDate("") 
            setContact("") 
            setService("") 
            setStatus("") 

        } catch (error) {
            console.log(error)
        }
    }


  return (
    <Card style={{ width: '18rem' }} className="mx-auto px-5">

        <Form onSubmit={handleSubmit}>

            <Form.Label htmlFor="local">Local </Form.Label>
            <Form.Select value={local} onChange={handleLocal}>
            <option value="home">Home</option>
            <option value="onsite">On site</option>
            </Form.Select>

            <label htmlFor="date">Date</label>
            <Form.Control type="date" name='date' value={date} onChange={handleDate} />
            
            <Form.Label htmlFor="service">Service</Form.Label>
            <Form.Select value={service} onChange={handleService} >
            <option value="6383e80458fb22fbcc2290f7">Relaxing Massage</option>
            <option value="6383e86858fb22fbcc2290f9">Foot Massage</option>
            <option value="6383e8f658fb22fbcc2290fb">Stretch Massage</option>
            <option value="6383e95858fb22fbcc2290fd">Chair Massage</option>
            </Form.Select>
            
            <Form.Label htmlFor="contact">Phone Number</Form.Label>
            <Form.Control type="number" name='contact' value={contact} onChange={handleContact} placeholder="e.g. 9999-9999 " />

            <Button variant="secondary" type="submit">Book</Button>            
        </Form>
    </Card>
  )
}

export default AddBook