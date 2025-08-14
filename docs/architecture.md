# Architecture Overview

## Backend

The backend is built using **Node.js** and **Express**, with a **GraphQL API** powered by Apollo Server. It uses **MongoDB** as the database, with **Mongoose** for schema modeling. Authentication is handled using **Passport.js**, and sessions are securely stored in MongoDB using **express-session**.

### Key Components

- **GraphQL Resolvers**: Located in `backend/resolvers/`, these define the logic for handling GraphQL queries and mutations.
- **GraphQL Type Definitions**: Located in `backend/typeDefs/`, these define the schema for the GraphQL API.
- **Database Models**: Located in `backend/models/`, these define the MongoDB schemas using Mongoose.
- **Authentication**: Configured in `backend/passport/`, using Passport.js for secure user authentication.
- **Session Management**: Sessions are stored in MongoDB and configured in `backend/index.js`.

### Backend Entry Point

The backend server starts from `backend/index.js`, which initializes the Express app, connects to MongoDB, and sets up the Apollo Server for GraphQL.

## Frontend

The frontend is built using **React.js** with **Vite** for fast builds. It uses **Apollo Client** for GraphQL queries and mutations, **React Router DOM** for navigation, and **Tailwind CSS** for styling. **Chart.js** is used for data visualization.

### Key Components

- **React Components**: Located in `frontend/src/`, these define the UI and handle user interactions.
- **GraphQL Integration**: Apollo Client is used to fetch and mutate data from the backend GraphQL API.
- **Routing**: React Router DOM is used for client-side routing.
- **Styling**: Tailwind CSS is used for modern, responsive designs.

### Frontend Entry Point

The frontend app starts from `frontend/index.html`, with the main React app located in `frontend/src/`.

## Communication

The frontend communicates with the backend via GraphQL API endpoints. The backend serves the React app's static files in production, ensuring seamless integration.
