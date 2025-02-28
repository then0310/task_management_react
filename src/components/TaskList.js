import React from 'react';

const TaskList = ({ tasks, markTaskCompleted }) => {
  return (
    <ul className="space-y-4 mt-4">
        {tasks.map((task) => (
            <li key={task.id} className="bg-white shadow-lg rounded-lg p-4">
                <div className="flex justify-between items-center">
                <span className={task.isCompleted ? "line-through text-gray-400" : "text-gray-900"}>
                    {task.name}
                </span>
                <button
                    onClick={() => markTaskCompleted(task.id)}
                    className={`py-1 px-4 rounded-lg focus:outline-none focus:ring-2 ${
                    task.isCompleted
                        ? "bg-gray-300 text-gray-600 cursor-not-allowed" // Styling for "Completed" state
                        : "bg-green-500 text-white py-1 px-4 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-200 ease-in-out transform hover:scale-105" // Styling for "Complete" state
                    }`}
                    disabled={task.isCompleted} // Disable the button when task is completed
                >
                    {task.isCompleted ? "Completed" : "Complete"}
                </button>
                </div>
            </li>
        ))}
    </ul>
  );
};

export default TaskList;
