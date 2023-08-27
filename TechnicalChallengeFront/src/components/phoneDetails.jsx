import React from 'react';
import { apiBaseUrl } from "../config";
import axios from 'axios'
import { useParams } from 'react-router-dom';

const PhoneDetails = (phone) => {
    const {phoneId} = useParams
    
     const fetchPhoneDetails = async (phoneId) => {
        const response = await axios.get(`${apiBaseUrl}/phones/${phoneId}`);
        return response.data;
      };
  return (
    <div>

      <h2>Phone Details</h2>
      {phone ? (
          <div>
      <p>Name: {phone.name}</p>
      <p>Brand: {phone.manufacturer}</p>
      <p>Price: {phone.price}</p>
      </div>
      ) : (
        <p>Select a phone to view details</p>
      )}
    </div>
  );
};

export default PhoneDetails;