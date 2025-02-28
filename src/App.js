import React, { useState, useEffect } from 'react';
import config from './config';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState("");

  useEffect(() => {
    fetch(`${config.apiUrl}/tasks`)
      .then((response) => response.json())
      .then((data) => setTasks(data));
  }, []);

  const addTask = () => {
    if (taskName.trim()) {
      fetch(`${config.apiUrl}/tasks`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: taskName }),
      })
        .then((response) => response.json())
        .then((newTask) => setTasks([...tasks, newTask]));
      setTaskName("");
    }
  };

  const markTaskCompleted = (taskId) => {
    fetch(`${config.apiUrl}/tasks/${taskId}`, {
      method: "PUT",
    }).then(() => {
      setTasks(
        tasks.map((task) =>
          task.id === taskId ? { ...task, isCompleted: true } : task
        )
      );
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
        <div className="sticky top-0 bg-white py-4 z-10">
          <h1 className="text-3xl font-bold text-center mb-6 text-gray-700">Task Management</h1>
          <TaskForm taskName={taskName} setTaskName={setTaskName} addTask={addTask} />
        </div>
        <TaskList tasks={tasks} markTaskCompleted={markTaskCompleted} />
      </div>
    </div>
  );
};

export default App;
