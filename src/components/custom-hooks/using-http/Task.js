import React, {useState, useEffect} from 'react';
import NewTask from './new-task/NewTask';
import TaskList from './task-list/TaskList';

const Task = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [tasks, setTasks] = useState([]);

    const fetchTask = async () => {
        setIsLoading(true);
        try{
            const response = await fetch('https://react-http-a3d43-default-rtdb.firebaseio.com/tasks.json');

            if (!response.ok) {
                throw new Error('Request failed!');
            }

            const data = await response.json();
            
            const loadedData = [];

            for(const dataKey in data){
                loadedData.push({
                    id: dataKey,
                    text: data[dataKey].text
                })
            }

            setTasks(loadedData);
        }catch(err){
            
        }
        setIsLoading(false);
    }

    useEffect(()=> {
        fetchTask();
    });


    
    

    const taskAddHandler = (newTaskData) => {
        setTasks((prevTask) => {
            prevTask.concate(newTaskData)
        });
    }
  return (
    <>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-7">
                    <div className="add-form bg-light p-4">
                        <NewTask onAddTask={taskAddHandler} />
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="add-form mt-4">
                        <TaskList task={tasks} loading={isLoading} />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Task