import React, { useState } from 'react';

const PhoneDetails = () => {
    const [selectedPhone, setSelectedPhone] = useState(null);
  return (
    <div>
      <h2>Phone Details</h2>
      <PhoneDetails phone={selectedPhone} />
    </div>
  );
};



export default PhoneDetails;