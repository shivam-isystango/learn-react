import React from 'react'

const TaskList = (props) => {
  return (
    <>
        <div className='taskList'>
            {
                props.task.map(elem => {
                    return <div className="bg-success text-white p-3 mt-2 rounded" key={elem.id}>{elem.text}</div>
                })
            }
        </div>
    </>

  )
}

export default TaskList