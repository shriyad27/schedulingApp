import './App.css';
import AddTaskButton from './AddTaskButton';
import DeleteTaskButton from './DeleteTaskButton';
import { useState } from 'react';

function App() {

  const task = {
    id: 1,
    name: 'Learn React',
    completed: false
  };

  const [taskList, setTaskList] = useState(['Task 1', 'Task 2', 'Task 3', 'Task 4', 'Task 5']);
  const [dateList, setDateList] = useState(['8/10', '9/5', '9/8', '8/6', '9/3']);
  const [statusList, setStatusList] = useState(['Done', 'In progress', 'Finishing up', 'UGH', 'IDK']);
  const [tasks, addTasks] = useState(['Task 1', 'Task 2', 'Task 3', 'Task 4', 'Task 5']);


  const addTask = (newTask) => {
    setTaskList([...taskList, newTask]); 
  };

  const deleteTask = (taskIndex) => {
    const newTaskList = taskList.filter((task, index) => index !== taskIndex);
    setTaskList(newTaskList);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>
          Shriya's Scheduling App
        </h2>
        <div className = "buttons-container">
          <AddTaskButton taskList={taskList} addTask={addTask}/>
          <DeleteTaskButton taskList={taskList} deleteTask={deleteTask}/>
        </div>
        <div className="lists-container">
        <div>
          <h3>Tasks</h3>
          <ul className="List">
            {taskList.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Due Date</h3>
          <ul className="List">
            {dateList.map((date, index) => (
              <li key={index}>{date}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Status</h3>
          <ul className="List">
            {statusList.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
        </div>
      </div>
      </header>
    </div>
  );
}

export default App;
