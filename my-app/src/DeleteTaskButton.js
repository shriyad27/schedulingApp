//create a button to add a new task
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { useState } from 'react';


function DeleteTaskButton({taskList, deleteTask}) {

    const [currentTask, setTask] = useState('');
    const [showForm, setShowForm] = useState(false);

    const toggleForm = () => {
        setShowForm(!showForm); // Toggle the visibility state
    };

    const handleTaskChange = (event) => {
        setTask(event.target.value); // Update date based on input
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        const index = taskList.indexOf(currentTask); 
        if(index > -1){
            deleteTask(index);
        }
        setTask(''); // Reset task input
        toggleForm();
      };

    return (
        <div>
            <button onClick={toggleForm}>Delete Task</button>
            {showForm && (
                <form onSubmit={handleSubmit}>
                <label>
                    Task: <input type="text" name="name" value={currentTask} onChange={handleTaskChange}/>  
                </label>
                <input type="submit" value="Submit"/>
                </form>
            )}
        </div>
        
    );
    }
    export default DeleteTaskButton;