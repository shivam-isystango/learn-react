import React, { useRef } from 'react'

const AddMovie = (props) => {
    const titleRef = useRef();
    const textRef = useRef();
    const dateRef = useRef();


    const submitHandler = (e) =>{
        e.preventDefault();

        const inputTitleRef = titleRef.current.value;
        const inputTextRef = textRef.current.value;
        const inputDateRef = dateRef.current.value;

        const movieData = {
            title: inputTitleRef,
            openingText: inputTextRef,
            releaseDate: new Date(inputDateRef)
        }
        props.onAddData(movieData);

        titleRef.current.value = '';
        textRef.current.value = '';
        dateRef.current.value = '';
    }
  return (
    <>
        <div className="bg-light mb-3 p-4">
            <form action="" onSubmit={submitHandler}>
                <div className="form-group mb-3">
                    <input type="text" className="form-control" placeholder="Enter Title" ref={titleRef} />
                </div>
                <div className="form-group mb-3">
                    <textarea rows={4} className="form-control" placeholder="Enter upening text" ref={textRef}></textarea>
                </div>
                <div className="form-group mb-3">
                    <input type="date" className="form-control" ref={dateRef} />
                </div>
                <button type='submit' className='btn btn-success'>Add</button>
            </form>
        </div>
    </>
  )
}

export default AddMovie