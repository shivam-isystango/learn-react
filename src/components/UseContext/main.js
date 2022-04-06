import React, { createContext, useState } from 'react';
import ComA from './ComA';

const FullName = createContext();
const MyAge = createContext();

const Main = () => {
  
  const data = {
    name : "Shivam gour",
    class: "10th"
  }

  const [changedata, setChangedata] = useState(data);

  setTimeout(() => {
    setChangedata({
      name : "Shubham gour",
    class: "12th"
    })
  }, 2000);
  return (
    <>
        <FullName.Provider value={changedata}>
            <MyAge.Provider value={26}>
                <ComA />
            </MyAge.Provider>            
        </FullName.Provider>
    </>
  )
}

export default Main;
export {FullName, MyAge};