import React from 'react'

const List = (props) => {
    const classname = 'list ' + props.className; 
  return (
    <div className={classname}>
        {props.children}
    </div>
  )
}

export default List