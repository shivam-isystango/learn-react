import React from 'react';
import Login from './Auth/login';
import Counter from './counter/Counter';
import Header from './Auth/header';
import Home from './Auth/home';
import { useSelector } from 'react-redux';

const ReduxToolkit = () => {
    const isAuthenticated = useSelector(state => state.auth.authenticated);
    console.log(isAuthenticated );
  return (
    <>
        <Header />
        <div className="py-4">
            {!isAuthenticated && <Login />}
            {isAuthenticated && <Home />}
        </div>
        <Counter />
    </>
  )
}

export default ReduxToolkit