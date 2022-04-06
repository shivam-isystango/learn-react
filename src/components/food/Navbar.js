import React from 'react'

const Navbar = ({filterData, categoryType}) => {
  return (
    <>
        <nav className="d-flex justify-content-center mb-4">
            {categoryType.map((category)=>{
                return(
                    <button className="btn btn-outline-primary mx-1" onClick={() => filterData(category)} key={category}>{category}</button>
                )
            })}
        </nav>
    </>
  )
}

export default Navbar