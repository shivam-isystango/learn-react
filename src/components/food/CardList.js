import React from 'react'

const CardList = ( {cardData} ) => {
  return (
    <>
        <div className='row'>
            {
                cardData.map((element) => {
                    return(                   
                            <div className="col-lg-4" key={element.id}>
                                <div className="card mb-3">
                                    <div className="card-body">
                                        <span className="number">{element.id}</span>
                                        <h5 className="card-subtitle">{element.type}</h5>
                                        <h3 className="card-title">{element.name}</h3>
                                    </div>
                                </div>
                            </div>
                    )
                })
            }
        </div>
    </>
  )
}

export default CardList