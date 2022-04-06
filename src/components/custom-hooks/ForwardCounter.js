import useCounter from "./use-counter";

const ForwardCounter = () => {
    const number = useCounter();
  return (
    <>
        <div className="text-center d-inline-block p-3 bg-success text-white me-4">
            <h4>Increament</h4>
            <h5 className="m-0">{number}</h5>
        </div>
    </>
  )
}

export default ForwardCounter