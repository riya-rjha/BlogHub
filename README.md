# Full-Stack Blog Application

## Table of Contents

- [About the Project](#about-the-project)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Client](#client)
- [Server](#server)
- [Environment Variables](#environment-variables)

## About the Project

This is a full-stack blog application that enables users to create, edit, and manage blog posts. It includes essential features such as user authentication, commenting, post liking, and categorization by tags.

The application leverages modern web technologies, utilizing React for the frontend and Node.js with Express for the backend, backed by MongoDB for data storage.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repo/full-stack-blog-app.git
   cd full-stack-blog-app
   ```

2. Install dependencies for both client and server:

   ```bash
   cd client
   npm install
   cd ../server
   npm install
   ```

## Running the Application

### Client

To run the client side:

1. Navigate to the `client` directory:

   ```bash
   cd client
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

### Server

To run the server side:

1. Navigate to the `server` directory:

   ```bash
   cd server
   ```

2. Start the server:

   ```bash
   npm start
   ```


### Client

The client side is built with Vite and React. The main packages used are:

- `react`
- `react-dom`
- `react-router-dom`
- `react-context`
- `react-icons`
- `react-quill`
- `react-toastify`
- `axios`
- `tailwindcss`
- `react-context`
- `dotenv`
- `html-react-parser`

### Server

The server side is built with Node.js, Express, and MongoDB. The main packages used are:

- `express`
- `mongoose`
- `bcryptjs`
- `cookie-parser`
- `cors`
- `dotenv`
- `jsonwebtoken`
- `nodemon`
- `mongodb`
- `multer`


## Project Structure

The project is structured into two main directories: `client` and `server`.
   
```
   full-stack-blog-app/
│
├── client/
│   ├── public/
|   ├── Images/
│   ├── src/
│   │   ├── Components/
│   │   │   ├── Footer.jsx
│   │   │   ├── Loading.jsx
│   │   │   ├── Menu.jsx
│   │   │   ├── Navbar.jsx
│   │   │   └── PageNotFound.jsx
│   │   ├── Context/
│   │   │   └── authContext.jsx
│   │   ├── Pages/
│   │   │   ├── EditBlog.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Single.jsx
│   │   │   └── Write.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   ├── models/
│   │   ├── blog.js
│   │   └── user.js
│   ├── routes/
│   │   ├── auth.js
│   │   └── post.js
│   ├── index.js
│   ├── .env
│   ├── package.json
│   └── README.md
│
└── README.md
```

### Client

The client side is built with Vite and React, utilizing libraries such as React Router DOM, Axios, and React Quill for rich text editing.

### Server

The server side is built with Node.js, Express, and MongoDB. It includes packages like Mongoose for database modeling, bcrypt for password hashing, and JWT for authentication.

## Environment Variables

Ensure to set up your environment variables in the `.env` files located in the `server` and `client` directories. Here are the required variables:

**Server (.env):**

```plaintext
PORT=0000
MONGODB_URI=mongodb://localhost:27017/your-database-name
JWT_SECRET=your_jwt_secret_key
```

**Client (.env):**

```plaintext
VITE_baseURL=http://localhost:0000
```

Replace `your-database-name` and `your_jwt_secret_key` with your actual MongoDB database name and JWT secret key, respectively.

---

By following these instructions, you can set up and run your full-stack blog application. Happy coding!

---