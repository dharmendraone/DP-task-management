# 📝 Task Management System (MERN)

A simple task management web app built with the **MERN stack** (MongoDB, Express, React, Node.js).  
It lets you **create, update, delete, and manage tasks** with priorities and statuses.  
Users can **register/login** and only see their own tasks.  

---

## 🚀 Features
- ✅ User authentication (Register/Login with JWT)
- ✅ Create, edit, delete tasks
- ✅ Mark tasks as **completed** or **pending**
- ✅ Set task **priority** (Low, Medium, High)
- ✅ Color-coded UI for quick view
- ✅ Pagination for tasks
- ✅ Fully responsive with **Bootstrap**

---

## 🛠️ Tech Used
- **Frontend:** React, React Router, Axios, Bootstrap  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB Atlas (cloud database)  
- **Auth:** JWT (JSON Web Token)  

---

## 📸 Screenshots
Here’s what it looks like:

## Home

<img width="960" height="504" alt="image" src="https://github.com/user-attachments/assets/bc157dae-5a14-4d72-9b72-035a56316195" />

## Registration

<img width="960" height="504" alt="image" src="https://github.com/user-attachments/assets/10ca80aa-f366-4103-89e5-727c668d16d8" />


## login

<img width="960" height="504" alt="image" src="https://github.com/user-attachments/assets/1d59e77f-cebe-4bb0-a04b-4eb3c5dba41b" />


## Task List

<img width="960" height="504" alt="image" src="https://github.com/user-attachments/assets/7967b2d1-c759-4ea4-b5bb-c9e494e27637" />

## New Task Create

<img width="960" height="504" alt="image" src="https://github.com/user-attachments/assets/e01474bc-1914-48c0-b87a-f649df47f7c2" />

## Task view

<img width="960" height="504" alt="image" src="https://github.com/user-attachments/assets/44a1f93f-fe55-4e1f-8bb4-adae56524a45" />

## Task Edit

<img width="960" height="504" alt="image" src="https://github.com/user-attachments/assets/7b1b36d9-7afd-4983-8411-7b6a7109adf3" />

## Task Delete

<img width="960" height="504" alt="image" src="https://github.com/user-attachments/assets/af22d682-ff24-44c7-a07e-44bd257f2cfe" />

## 🖥️ Setup Instructions

### 1. Clone the repo

git clone https://github.com/dharmendraone/task-manager-dp
cd task-management

2️⃣ Setup Backend
cd backend
npm install 


Create a .env file in backend/ with your credentials:

MONGO_URI=your_mongodb_atlas_url
JWT_SECRET=your_secret_key
PORT=5000


Run backend server:

npm run dev


Backend runs at 👉 http://localhost:5000

3️⃣ Setup Frontend
cd ../frontend
npm install
npm start


Frontend runs at 👉 http://localhost:3000

🌍 Deployment (Optional)

Backend (Express + MongoDB):

Deploy free on Render
 or Railway

Add environment variables (MONGO_URI, JWT_SECRET)

Frontend (React):

Deploy free on Netlify
 or Vercel

Set API base URL in frontend/src/api.js to your deployed backend link

🙋 How to Use

Use it as your personal task tracker 🧑‍💻

Extend it into a team task manager 👨‍👩‍👧‍👦

Learn MERN stack development by building features on top 🚀

✨ Built with ❤️ while learning the MERN stack

Would you like me to also include a **pre-filled `.env.example`** section in this README so users don’t forget which variables to set?



