import './App.css';
import AddTaskButton from './AddTaskButton';
import DeleteTaskButton from './DeleteTaskButton';
import { useState } from 'react';

function App() {
  const [taskList, setTaskList] = useState(['Task 1', 'Task 2', 'Task 3', 'Task 4', 'Task 5']);

  const addTask = (newTask) => {
    setTaskList([...taskList, newTask]); // Correct way to update the list
  };

  const deleteTask = (taskIndex) => {
    const newTaskList = taskList.filter((task, index) => index !== taskIndex);
    setTaskList(newTaskList);
  };

  const printTaskList = () => {
    console.log(taskList);
  }


  return (
    <div className="App">
      <header className="App-header">
        <h2>
          Shriya's Scheduling App
        </h2>
        <AddTaskButton taskList={taskList} addTask={addTask}/>
        <DeleteTaskButton taskList={taskList} deleteTask={deleteTask}/>
        <button onClick={printTaskList}>Print</button>
        <ul className="List">
          {taskList.map((task, index) => (
            <ul key={index}>{task}</ul>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
