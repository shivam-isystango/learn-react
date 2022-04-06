import useCounter from "./use-counter";

const BackwardCounter = () => {
    const number = useCounter(false);
  return (
    <>
        <div className="text-center d-inline-block p-3 bg-danger text-white">
            <h4>Decreament</h4>
            <h5 className="m-0">{number}</h5>
        </div>
    </>
  )
}

export default BackwardCounter