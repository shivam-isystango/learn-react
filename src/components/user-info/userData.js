import React, { useState } from 'react';
import Data from "./data";
import UserInfo from "./userInfo"

const formateDate = (date) => {
    return date.toLocaleDateString();
}
const UserData = () => {
  return (
    <>
        <div className="comment">
            
            <UserInfo user={Data.author} />
            
            <div className="Comment-text" style={{marginBottom: 15}}>
                {Data.text}
            </div>
            <div className="Comment-date">
                {formateDate(Data.date)}
            </div>
        </div>
    </>
  )
}

export default UserData