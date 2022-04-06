import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from './authSlice';

const Header = () => {
    const isAuthenticated = useSelector(state => state.auth.authenticated);
    const dispatch = useDispatch()

    const logOutHandler = () => {
        dispatch(logOut())
    }
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="#">Navbar</a>
                <div className="collapse navbar-collapse">
                    {
                        isAuthenticated && 
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Services</a>
                            </li>
                            <li className="nav-item">
                                <button className="btn btn-danger" onClick={logOutHandler}>Logout</button>
                            </li>
                        </ul>
                    }
                    
                </div>
            </div>
        </nav>
    </>
  )
}

export default Header