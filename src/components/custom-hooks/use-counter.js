import React,{ useState, useEffect }  from 'react'

const useCounter = (forward = true) => {
    const [number, setNumber] = useState(0);

    useEffect(() => {
        const iterval = setInterval(() => {
            if(forward){
                setNumber(prevValue => prevValue + 1)
            }else{
                setNumber(prevValue => prevValue - 1)
            }
        }, 1000);

        return () => clearInterval(iterval);
    },[forward])

  return number
}

export default useCounter