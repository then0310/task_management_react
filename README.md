# Task Management Application

## 📖 Overview
This is a **C#-based task management application** designed to manage tasks efficiently. The backend is built with **ASP.NET Core**, and the frontend is implemented using **React with Tailwind CSS**.

## 🛠️ Tech Stack
- **Backend**: C# (.NET 8), ASP.NET Core, RESTful APIs, Visual Studio 2022
- **Frontend**: React.js, Tailwind CSS
- **Cloud & DevOps**: Docker, AWS/GCP (if applicable)

---

## 🚀 Getting Started  

### 1️ **Prerequisites**
Ensure you have the following installed on your machine:
- [Node.js (18+)](https://nodejs.org/)
- [Git](https://git-scm.com/)

---

### 2️ **How to Run Locally**
1. Clone the repository:<br>
   git clone https://github.com/then0310/task_managment_react.git

2. Navigate to the project directory<br>
   cd your-repo-name

3. Environment Variables<br>
   Using environment variables (e.g., for API endpoints), create a .env.development file in the root of your project:<br>
   REACT_APP_API_URL=https://localhost:44372/api/v1

3. Install dependencies<br>
   npm install

4. Start the development server:<br>
   npm start

5. Open your browser and visit http://localhost:3000 to view the app.

### 3 **Deploy to AWS Amplify**
AWS Amplify is a cloud service by Amazon that supports React apps and provides backend capabilities.

1. Create an AWS Amplify App:<br>
   Go to the AWS Amplify Console.<br>
   Click "Get Started" and connect your GitHub/GitLab/Bitbucket repository.

2. Configure Build Settings:<br>
   Amplify will automatically detect your React app and configure the build settings.<br>
   Confirm the settings and deploy.

3. Access Your App:<br>
   Once the deployment is complete, Amplify will provide you with a live URL.



