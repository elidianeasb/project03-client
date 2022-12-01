import { useState } from 'react';
import axios from 'axios';

function AddBook(props) {
    const [type, setType] = useState("");
    const [name, setName] = useState("");
    const [price, setprice] = useState("");
    const [contact, setContact] = useState("");


    const handleType = (e) => setType(e.target.value);
    const handleName = (e) => setName(e.target.value);
    const handleContact = (e) => setContact(e.target.value);
    const handlePrice = (e) => setprice(e.target.value);


    const handleSubmit = async (e) => {
        e.preventDefault(); //prevent to reload the page
        try {            
            await axios.post(`${process.env.REACT_APP_API_URL}/services`, { type, name, price, contact }); 

            setType("")
            setName("")
            setContact("")
            setprice("")

            props.refreshService();

        } catch (error) {
            console.log(error)
        }
    }



    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="type">type</label>
                <input type="text" name='type' value={type} onChange={handleType} />

                <label htmlFor="name">name</label>
                <input type="text" name='name' value={name} onChange={handleName} />


                <label htmlFor="price">price</label>
                <input type="number" name='price' value={price} onChange={handlePrice} />


                <label htmlFor="contact">Contact</label>
                <input type="text" name='contact' value={contact} onChange={handleContact} />

                <button type="submit">Add Service</button>

            </form>
        </div>
    )
}

export default AddBook