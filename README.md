# Zerodha_clone - Full Stack Trading Platform

Zerodha_clone is a full-stack trading platform developed as an educational project inspired by modern stock trading platforms.

> **Disclaimer:** This project is created for educational and learning purposes only. It is not connected with Zerodha and does not provide real stock trading, investment advice, or financial services.

## Features

* User Signup and Login
* JWT-based Authentication
* Password Hashing using bcrypt
* Trading Dashboard
* Holdings Management
* Positions Management
* Order Management
* MongoDB Database Integration
* REST API Integration
* AI-powered Chatbot
* React-based Frontend

## Technologies Used

### Frontend

* React.js
* React Router
* JavaScript
* HTML
* CSS
* Bootstrap

### Dashboard

* React.js
* JavaScript
* REST APIs

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* bcryptjs
* JSON Web Token (JWT)

### AI Chatbot

* Node.js
* Express.js
* OpenAI API

## Project Structure

```text
Zerodha_clone
│
├── frontend
│   └── React frontend website
│
├── dashboard
│   └── Trading dashboard
│
├── backend
│   └── Node.js + Express + MongoDB backend
│
├── chatbot-backend
│   └── AI chatbot backend
│
├── .gitignore
└── README.md
```

## Database

MongoDB is used to store application data including:

* User accounts
* Holdings
* Positions
* Orders

## Authentication

The application uses:

* bcryptjs for password hashing
* JWT for authentication
* Secure environment variables for sensitive credentials

## How to Run the Project

### 1. Clone the Repository

```bash
git clone https://github.com/deepthis1701-ui/Zerodha_clone.git
cd Zerodha_clone
```

### 2. Run Frontend

```bash
cd frontend
npm install
npm start
```

### 3. Run Dashboard

Open a new terminal:

```bash
cd dashboard
npm install
npm start
```

### 4. Run Backend

Open a new terminal:

```bash
cd backend
npm install
node index.js
```

### 5. Run Chatbot Backend

Open another terminal:

```bash
cd chatbot-backend
npm install
node index.js
```

## Environment Variables

The backend requires environment variables for database connection, authentication, and AI services.

Create the required `.env` files locally.

**Do not upload `.env` files to GitHub.**

Example:

```env
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

The chatbot backend also requires its required API key in its `.env` file.

## Future Improvements

* Real-time market data integration
* Watchlist functionality
* Advanced trading charts
* Portfolio analytics
* Transaction history
* Two-factor authentication
* Cloud deployment

## Author

**Deepthi S**

GitHub: https://github.com/deepthis1701-ui

## Disclaimer

Zerodha_clone is an educational project developed for learning and demonstration purposes. It is not affiliated with Zerodha and does not provide real financial or investment services.
