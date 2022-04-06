import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <>
        <Link to="/">Home</Link><br /><br />
        <Link to="/about">About Us</Link><br /><br />
        <Link to="/contact">Contact Us</Link><br /><br />
        <Link to="/user/shivam/gour">User</Link>
    </>
  )
}

export default Navbar