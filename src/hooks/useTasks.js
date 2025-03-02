import { useState, useEffect } from 'react';
import { fetchTasks, addTask as addTaskService, markTaskCompleted as markTaskCompletedService } from '../services/taskService';

export const useTasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const loadTasks = async () => {
      const data = await fetchTasks();
      setTasks(data);
    };
    loadTasks();
  }, []);

  const addTask = async (taskName) => {
    if (typeof taskName === 'string' && taskName.trim()) {
      const newTask = await addTaskService(taskName.trim());
      setTasks([...tasks, newTask]);
      return true; // Indicate success
    } else {
      console.error("Invalid task name:", taskName);
      return false; // Indicate failure
    }
  };

  const markTaskCompleted = async (taskId) => {
    await markTaskCompletedService(taskId);
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, isCompleted: true } : task
      )
    );
  };

  return { tasks, addTask, markTaskCompleted };
};