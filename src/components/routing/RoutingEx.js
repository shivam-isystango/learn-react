import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './Menu';
import Home from './home';
import About from './about';
import Contact from './contact';
import User from './user';
import ErrorPage from './ErrorPage';
import Navbar from './Menu';

const RoutingEx = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/user/:fname/:lname' element={<User />} />
            <Route path='*' element={<ErrorPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default RoutingEx