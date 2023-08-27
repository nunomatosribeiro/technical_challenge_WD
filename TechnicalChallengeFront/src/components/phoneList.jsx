import { useEffect, useState } from 'react'
import axios from 'axios'
import LoadingSpinner from './spinner';
import PhoneDetails from './phoneDetails';
import { apiBaseUrl } from "../config";
import { fetchPhones, fetchPhoneDetails } from '../api';
function PhoneList () {
    
const [phones, setPhones] = useState([])
const [selectedPhone, setSelectedPhone] = useState(null);
  const [isLoading, setIsLoading] = useState(true)
  
  const fetchPhones = async () =>{
try{
  const response = await axios.get(`${apiBaseUrl}/phones`)
  setPhones(response.data)
  setIsLoading(false)
} catch (error) {
  console.log('Error fetching phones', error)
}
  }

  useEffect (() =>{
    fetchPhones()
  }, [])

  const handlePhoneSelect = async (phoneId) => {
    try {
      setIsLoading(true);
      const phoneDetails = await fetchPhoneDetails(phoneId);
      setSelectedPhone(phoneDetails);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching phone details:', error);
    }
  };
  
 
  
 return (
    <>
    {isLoading ? (
    <LoadingSpinner />
    ) : (
      <div>
     <h3>List of phones</h3>
     <ul>
     {phones.map((phone) => (
     
        <li key={phone.id} 
        onClick={() => handlePhoneSelect(phone)} className="card">
          <img src={phone.images} alt="phone" />
          <h3>{phone.name}</h3>
          <p>Price: {phone.price}</p>
          </li>
        
      ))}
      </ul>
      </div>
        )}
         {selectedPhone && <PhoneDetails phone={selectedPhone} />}
    </>
 ) 
}

export default PhoneList