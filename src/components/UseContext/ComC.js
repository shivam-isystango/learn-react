import React from 'react';
import {FullName, MyAge} from "./main"

const ComC = () => {
  return (
    <>
        <FullName.Consumer>
            {(fname)=>{
                return(
                    <MyAge.Consumer>
                        {(age)=>{
                            return(
                                <>
                                    <h1>My name is {fname}</h1>
                                    <h5>My age is {age}</h5>
                                </>
                            )
                        }}
                    </MyAge.Consumer>
                ) 
            }}
        </FullName.Consumer>
    </>
  )
}

export default ComC