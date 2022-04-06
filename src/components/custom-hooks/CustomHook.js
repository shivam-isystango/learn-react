import React from 'react'
import ForwardCounter from './ForwardCounter'
import BackwardCounter from './BackwardCounter'

const CustomHook = () => {
  return (
    <>
        <div className="container">
            <ForwardCounter />
            <BackwardCounter />
        </div>
    </>
  )
}

export default CustomHook