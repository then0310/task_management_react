import React, { useState } from 'react';
import { useTasks } from './hooks/useTasks';
import TaskForm from './components/TaskForm';
import TaskTable from './components/TaskTable';

const App = () => {
  const { tasks, addTask, markTaskCompleted } = useTasks();
  const [taskName, setTaskName] = useState("");
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 5 }); // Manage pagination state here

  const handleAddTask = async () => {
    await addTask(taskName); // Add the task
    setTaskName(""); // Clear the input field
  };

  return (
    <div className="min-h-screen h-screen bg-gray-100 flex justify-center items-center p-4 md:p-8">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-screen-md md:max-w-screen-lg h-full flex flex-col">
        {/* Sticky Header */}
        <div className="sticky top-0 bg-white py-4 z-10">
          <h1 className="text-3xl font-bold text-center mb-6 text-gray-700">Task Management</h1>
          <TaskForm
            taskName={taskName}
            setTaskName={setTaskName}
            addTask={handleAddTask}
          />
        </div>

        {/* Scrollable Table Container */}
        <div className="flex-1 overflow-y-auto">
          <TaskTable
            tasks={tasks}
            markTaskCompleted={markTaskCompleted}
            pagination={pagination} // Pass pagination state
            setPagination={setPagination} // Pass setPagination function
          />
        </div>
      </div>
    </div>
  );
};

export default App;