//create a button to add a new task
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { useState } from 'react';


function AddTaskButton({taskList, addTask}) {

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
        addTask(currentTask); // Add the task using the function passed from the parent
        setTask(''); // Reset task input
        toggleForm(); // Hide the form after submission
      };

    return (
        <div>
            <button onClick={toggleForm}>Add Task</button>
            {showForm && (
                <form onSubmit={handleSubmit}>
                <div>
                <label>
                    Task: <input type="text" name="name" value={currentTask} onChange={handleTaskChange}/>  
                </label>
                </div>
                <div>
                <label>
                    Date: <input type="text" name="email" onChange={handleTaskChange} />
                </label>
                </div>
                <input type="submit" value="Submit"/>
                </form>
            )}
        </div>
        
    );
    }
    export default AddTaskButton;