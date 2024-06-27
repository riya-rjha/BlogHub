# Full-Stack Blog Application

## Table of Contents

- [About the Project](#project)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Client](#client)
- [Server](#server)

## About the Project

This is a full stack blog application that allows users to add, edit, or delete blog posts. It includes essential features such as user authentication, blogging capabilities, commenting on posts, liking posts, and categorizing posts by tags.

This application leverages modern web development technologies to provide a seamless and efficient user experience. The client side is built with React and Vite, while the server side uses Node.js, Express, and MongoDB.

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

## Project Structure

The project is divided into two main directories: `client` and `server`.

```
full-stack-blog-app/
│
├── client/
│   ├── public/
│   ├── src/
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   ├── models/
│   ├── routes/
│   ├── index.js
│   ├── .env
│   ├── package.json
│   └── README.md
│
└── README.md
```

### Client

The client side is built with Vite and React. The main packages used are:

- `react`
- `react-dom`
- `react-icons`
- `react-router-dom`
- `react-toastify`
- `axios`
- `tailwindcss`

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

## Environment Variables

Create a `.env` file in the `server` directory to store your environment variables:

```plaintext
# server/.env

MONGODB_URI=mongodb://localhost:27017/your-database-name
JWT_SECRET=your_jwt_secret_key
```

Ensure to replace `your-database-name` and `your_jwt_secret_key` with your actual MongoDB database name and JWT secret key, respectively.

## License

This project is licensed under the MIT License.

---

By following these instructions, you can set up and run your full stack blog application. Happy coding!
