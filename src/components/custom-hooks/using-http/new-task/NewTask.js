import React from 'react';
import TaskForm from './TaskForm';

const NewTask = (props) => {
    const enterTaskHandler = async (taskText) => {
        try{
            const response = fetch('https://react-http-a3d43-default-rtdb.firebaseio.com/tasks.json', {
                method: 'POST',
                body: JSON.stringify({text: taskText}),
                headers: {'Content-Type': 'application/json'}
            });

            if(!response.ok){
                throw new Error('Request failed');
            }

            const data = await response.json();
            const generateId = data.name;

            const createdData = {
                id: generateId,
                name: taskText
            }
            props.onAddTask(createdData);
        }catch(err){

        }
    }
  return (
    <>
        <TaskForm getInputValue={enterTaskHandler} />
    </>
  )
}

export default NewTask