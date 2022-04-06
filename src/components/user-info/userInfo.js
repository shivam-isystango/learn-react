import React from 'react';

const UserInfo = ({user}) => {
  return (
    <>
        <div className="user-info">
            <img src={user.avatarUrl} alt="" />
            <div className="user-name">
                <h4>{user.name}</h4>
            </div>
        </div>
    </>
  )
}

export default UserInfo