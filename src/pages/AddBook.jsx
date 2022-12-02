import { useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'
import { Slide, Zoom, Flip, Bounce } from 'react-toastify';

function AddBook(props) {
    const navigate = useNavigate();
    const [date, setDate] = useState("");
    const [hour, setHour] = useState("9:00");
    const [service, setService] = useState("63848c969d7a6aa319a6fed9");
    const [contact, setContact] = useState("");

    const handleDate = (e) => setDate(e.target.value);
    const handleService = (e) => setService(e.target.value);
    const handleHour = (e) => setHour(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault(); //prevent to reload the page
        try {
            const storedToken = localStorage.getItem('authToken');
            await axios.post(`${process.env.REACT_APP_API_URL}/bookings`, { hour, date, service, contact }, {
                headers: { Authorization: `Bearer ${storedToken}` }
            });

            setDate("")
            setContact("")
            setService("")
            setHour("")

            navigate(`/bookings`); //refresh the list            

        } catch (error) {
            console.log(error)
        }
    }

    const notify = () => {
        toast.success('Booking Successfully', {
            position: toast.POSITION.TOP_CENTER,
            icon: '✅',
            transition: Flip,
            className: 'toast-message'
        })
    }

    return (
        <Card style={{ width: '18rem', marginTop: "100px", padding: "50px", border: "none" }} className="mx-auto px-5">

            <Form onSubmit={handleSubmit}>
                <Form.Label htmlFor="service" style={{ marginRight: "300px" }}>Service:</Form.Label>
                <Form.Select value={service} onChange={handleService} >
                    <option value="6383e80458fb22fbcc2290f7">Relaxing Massage</option>
                    <option value="6383e86858fb22fbcc2290f9">Foot Massage</option>
                    <option value="6383e8f658fb22fbcc2290fb">Stretch Massage</option>
                    <option value="6383e95858fb22fbcc2290fd">Chair Massage</option>
                </Form.Select >
                <Form.Label htmlFor="date" style={{ marginTop: "30px", marginRight: "300px" }} className="text-start">Date:</Form.Label>
                <Form.Control type="date" name='date' value={date} onChange={handleDate} />

                <Form.Label htmlFor="local" style={{ marginTop: "30px", marginRight: "300px", width: "100px" }}>Start Time:</Form.Label>
                <Form.Select style={{ textAlign: "center" }} value={hour} onChange={handleHour}>
                    <option value="9:00">9:00</option>
                    <option value="10:00">10:00</option>
                    <option value="11:00">11:00</option>
                    <option value="12:00">12:00</option>
                    <option value="14:00">14:00</option>
                    <option value="15:00">15:00</option>
                    <option value="16:00">16:00</option>
                    <option value="17:00">17:00</option>
                </Form.Select>
                <button className="instButton ms-auto me-auto" style={{ width: "180px", marginTop: "50px", fontSize: "15px" }} type="submit" onClick={() => notify()}>Book</button>
            </Form>
        </Card>
    )
}

export default AddBook