import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

function ServiceList() {
  const [services, setServices] = useState([]);
  const getAllServices = async () => {
    try {
      const storedToken = localStorage.getItem('authToken');
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/services`, {
        headers: { Authorization: `Bearer ${storedToken}` }
      });

      setServices(response.data);
      console.log(response.data)

    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    getAllServices();
  }, [])

  return (
    <div>
      <h1>List of services:</h1>
      {services.map((service) => {
        return (
          <div key={service._id} >
            <Link to={`/service/${service._id}`}>
              <h2>{service.name}</h2>
            </Link>
          </div>
        );
      })}

    </div>
  )
}
export default ServiceList;

