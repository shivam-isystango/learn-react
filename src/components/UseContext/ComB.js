import React, { useContext } from 'react'
import ComC from './ComC'
import {FullName, MyAge} from './main'


const ComB = () => {
  let biodata = useContext(FullName);
  let age = useContext(MyAge);
  return (
    <>
        {/* <ComC /> */}
        <h4>My name is {biodata.name} and class {biodata.class}</h4>
        <h3>My age is {age}</h3>
    </>
  )
}

export default ComB