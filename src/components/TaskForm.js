import React from 'react';

const TaskForm = ({ taskName, setTaskName, addTask }) => {
  return (
    // <div className="sticky top-0 bg-white py-4 z-10">
        <div className="flex mb-4">
        <input
                type="text"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                className="border p-2 w-full rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter task"
            />

            <button
                onClick={addTask}
                className="bg-blue-500 text-white px-4 rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 ease-in-out transform hover:scale-105"
            >
                Add
            </button>
        </div>
    // </div>
  );
};

export default TaskForm;
