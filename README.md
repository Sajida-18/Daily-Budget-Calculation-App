📊 Budget Manager App

A full-stack budget management web application where users can set a budget, add items (expenses), and track their spending with a clear breakdown of total spent and remaining funds.

🚀 Features

💰 Set your total budget

➕ Add expense items (name, price, quantity)

📊 View summary: total budget, spent, and remaining

🕒 Expense history with individual item details

🎨 Clean, responsive UI with Tailwind CSS

🛠️ Tech Stack

Frontend: React, Tailwind CSS

Backend: Express.js, Node.js

Database: MySQL (XAMPP)

API: RESTful

🧪 Setup Instructions

1. 🛢️ MySQL Database (via XAMPP)

Open XAMPP and start Apache and MySQL

Go to phpMyAdmin and create a database (e.g., budget_app)

Import the provided .sql file in the database/ folder

2. 🔙 Backend Setup

cd backend
npm install
npm start

Backend runs on: http://localhost:5000

3. 🔜 Frontend Setup

cd frontend
npm install
npm start

Frontend runs on: http://localhost:3000

Make sure Tailwind CSS is properly set up with tailwind.config.js and postcss.config.js

📷 Preview

Add screenshots here to showcase the UI (e.g., summary view, item form, item list)

📦 API Endpoints

GET /api/latest-budget – Fetch latest budget

POST /api/budget – Create new budget

POST /api/item – Add new item

GET /api/items/:budgetId – Get items for a budget

GET /api/summary/:budgetId – Get budget summary
