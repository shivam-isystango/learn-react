import React from 'react';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <>
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand">
                    <h4 className='mb-0'>Food Meal</h4>
                </a>
                <HeaderCartButton onClick={props.onShowCart} />
            </div>
        </nav>
    </>
  )
}

export default Header