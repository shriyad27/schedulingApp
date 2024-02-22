import React, { useState } from 'react';
import './App.css'; // Assuming you have a CSS file for styles
import './DynamicGrid.css'; // Assuming you have a CSS file for styles
import PopupForm from './PopUp';

function DynamicGrid() {
  const [items, setItems] = useState(['']); // Initial tasks
  const [dates, setDates] = useState(['']); // Initial tasks

  const taskList = [{
    title: 'Task 1', time: '12:00', date: '2021-10-01'
  }];

  // Function to add a new item
  const addItem = () => {
    const newItem = `Item ${items.length}`;
    setItems([...items, newItem]);
  };

  // Function to remove the last item
  const removeItem = () => {
    setItems(items.slice(0, -1));
  };

  const nameList = taskList.map(task =>
    <li key={task.date}>
      {task.title}
    </li>
  );

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      <button onClick={removeItem}>Remove Item</button>
      {/* <div className="grid">
        {items.map((item, index) => (
          <div key={index} className="grid-item">{item}</div>
        ))}
      </div> */}
      <ul>{nameList}</ul>
    </div>
  );
}

export default DynamicGrid;