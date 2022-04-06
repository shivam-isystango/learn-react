import React, { useState } from 'react'

const MyAccordian = ({ques, ans}) => {
    const [show, setShow] = useState(false);
  return (
    <>
        <h6>
            <span onClick={()=> setShow(!show)}>
                {show ? "-" : "+"}
            </span> {ques}
        </h6>
        {
            show && <p>{ans}</p>
        }  
    </>
  )
}

export default MyAccordian