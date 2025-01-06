import React, { useState } from 'react'; // Importing React and the useState hook for state management.

export default function TodoApp() {
  // State to store the current task being typed by the user
  const [task, setTask] = useState(""); 

  // State to store the list of tasks
  const [tasks, setTasks] = useState([]); 

  // Function to add a new task to the task list
  function addTask() {
    if (task.trim()) { // Check if the task is not empty or only whitespace
      setTasks([...tasks, task]); // Add the new task to the tasks array using the spread operator
      setTask(''); // Clear the input field after adding the task
    }
  }

  // Function to delete a task by its index
  function deleteTask(index) {
    setTasks(tasks.filter((_, i) => i !== index)); 
    // Use filter to create a new array without the task at the specified index
  }

  return (
    <div>
      <h1>TODO APP</h1> {/* Title of the application */}
      
      {/* Input field to accept user input for new tasks */}
      <input
        type="text"
        value={task} // Bind the value of the input to the task state
        onChange={(e) => setTask(e.target.value)} // Update the task state whenever the user types
        placeholder="Enter a Task" // Placeholder text to guide the user
      />

      {/* Button to trigger the addTask function */}
      <button onClick={addTask}>ADD</button> 

      {/* List of tasks rendered dynamically */}
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}{" "} {/* Display the task text */}
            {/* Button to delete the specific task */}
            <button onClick={() => deleteTask(index)}>DELETE</button> 
          </li>
        ))}
      </ul>
    </div>
  );
}