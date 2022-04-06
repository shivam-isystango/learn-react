import React from 'react'

const MovieList = (props) => {
  return (    
    <>
        {
            props.movies.map(elem =>  {
                return <div className="col-lg-4" key={elem.id}>
                <div className="card text-white bg-success">
                    <div className="card-body">
                        <h4 className="card-title text-warning">{elem.title}</h4>
                        <p>{elem.openingText}</p>
                        <strong>{elem.releaseDate}</strong>
                    </div>
                </div>
            </div>
            })
        }
    </>    
  )
}

export default MovieList