import React, {useEffect, useState} from 'react'

const UseEffect = () => {
    const [myNumber, setMyNumber] = useState(0);
    useEffect(() => {
        document.title = `Chat ${myNumber}`
    })
    return (
        <>
            <div className='text-center'>
                <h3>{myNumber}</h3>
                <button className="btn btn-outline-success" onClick={() => setMyNumber(myNumber + 1)}>Increament</button>
                <button className="btn btn-outline-danger ms-3" onClick={() => (myNumber > 0 ? setMyNumber(myNumber - 1) : setMyNumber(0))}>Decreament</button>
            </div>
        </>
    )
}

export default UseEffect