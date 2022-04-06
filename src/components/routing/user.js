import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

const User = () => {
    const {fname, lname} = useParams();
    const location = useLocation();
    console.log(location);
  return (
    <div>
        <h2>Hello {fname} {lname}</h2>
        <h3>My current location is {location.pathname}</h3>
        {
            location.pathname === `/user/shivam/gour` ? <button>Click Me</button> : null
        }
    </div>
  )
}

export default User