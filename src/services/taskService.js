const API_URL = process.env.REACT_APP_API_URL;

export const fetchTasks = async () => {
  const response = await fetch(`${API_URL}/tasks`);
  return response.json();
};

export const addTask = async (taskName) => {
  const response = await fetch(`${API_URL}/tasks`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: taskName }),
  });
  return response.json();
};

export const markTaskCompleted = async (taskId) => {
  const response = await fetch(`${API_URL}/tasks/${taskId}`, {
    method: "PUT",
  });
  return response.json();
};