import React, { useState, useEffect, createContext } from 'react';

import Login from './Login/Login';
import Home from './Home/Home';
import MainHeader from './MainHeader/MainHeader';

let AuthContext = createContext({
  isLoggedIn: false,
  onLogout: () => {}
})

function ProjectLogin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  useEffect(() => {
    const storedLoggedData = localStorage.getItem('isLoggedIn');

    if(storedLoggedData === '1'){
      setIsLoggedIn(true);
    }
  })

  const loginHandler = (email, password) => {
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);

  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{
      isLoggedIn: isLoggedIn,
      onLogout: logoutHandler
    }}>
      <MainHeader onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </AuthContext.Provider>
  );
}

export default ProjectLogin;
export {AuthContext};
