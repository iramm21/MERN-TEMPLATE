# MERN-TEMPLATE

## Introduction
MERN-TEMPLATE is a full-stack web application template using the MERN stack (MongoDB, Express.js, React, Node.js). It is designed to provide a starting point for building scalable and feature-rich web applications.

## Features
- **User Authentication:** Implements user registration and login functionality.
- **Responsive Design:** Utilizes Tailwind CSS for a responsive and modern UI.
- **RESTful API:** Backend API built with Express.js and Node.js.
- **Database Integration:** MongoDB for data persistence with Mongoose as an ODM.
- **State Management:** Uses React's Context API for managing application state.

## Project Structure
- `client/`: Contains the React frontend application.
  - `src/`: Source files for the React application.
    - [`App.js`](https://github.com/iramm21/MERN-TEMPLATE/blob/main/client/src/App.js): Main application component with routing.
    - [`Navbar.js`](https://github.com/iramm21/MERN-TEMPLATE/blob/main/client/src/components/Navbar.js): Navigation bar component.
    - `pages/`: Individual pages of the application.
      - [`Account.js`](https://github.com/iramm21/MERN-TEMPLATE/blob/main/client/src/pages/Account.js): User account page.
      - [`Home.js`](https://github.com/iramm21/MERN-TEMPLATE/blob/main/client/src/pages/Home.js): Home page.
      - [`Login.js`](https://github.com/iramm21/MERN-TEMPLATE/blob/main/client/src/pages/Login.js): User login page.
      - [`SignUp.js`](https://github.com/iramm21/MERN-TEMPLATE/blob/main/client/src/pages/SignUp.js): User registration page.
- `server/`: Contains the Node.js/Express backend application.
  - [`server.js`](https://github.com/iramm21/MERN-TEMPLATE/blob/main/server/server.js): Main server file with API routes.
  - `models/`: Database models.
    - [`userSchema.js`](https://github.com/iramm21/MERN-TEMPLATE/blob/main/server/models/userSchema.js): Mongoose schema for user data.

## Installation
1. Clone the repository.
2. Install dependencies for both client and server:
```
  cd client && npm install
  cd ../server && npm install
```
3. Set up environment variables for database connection and JWT secret in the server.

## Running the Application
- Start the backend server:
```
  cd server
  npm start
```
- Start the frontend application:
```
  cd client
  npm start
```
## Contributing
Contributions to the MERN-TEMPLATE are welcome. Please follow the standard fork-and-pull request workflow.

## License
This project is licensed under the [MIT License](LICENSE).
