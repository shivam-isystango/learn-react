import React, { useState } from 'react';
const Tabs = () => {
    const [show, setShow] = useState(1);

    const toggleTab = (index) => {
        setShow(index)
    }
  return (
    <>
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <a className={show === 1 ? "nav-link active" : "nav-link"} onClick={()=> toggleTab(1)}>Home</a>
            </li>
            <li className="nav-item">
                <a className={show === 2 ? "nav-link active" : "nav-link"} onClick={()=> toggleTab(2)}>Profile</a>
            </li>
            <li className="nav-item">
                <a className={show === 3 ? "nav-link active" : "nav-link"} onClick={()=> toggleTab(3)}>Contact</a>
            </li>
        </ul>
        <div className="tab-content">
            <div className={show === 1 ? "tab-pane active" : "tab-pane"}><h3>Home</h3></div>
            <div className={show === 2 ? "tab-pane active" : "tab-pane"}><h3>Profile</h3></div>
            <div className={show === 3 ? "tab-pane active" : "tab-pane"}><h3>Contact</h3></div>
        </div>
    </>
  )
}

export default Tabs