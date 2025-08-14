# Overview

**FinSync** is a comprehensive financial synchronization application that provides users with tools to track, categorize, and analyze their financial transactions seamlessly. Built with a robust backend and modern frontend technologies, it ensures a user-friendly experience while maintaining security and scalability.

## Features

- **User Authentication**: Secure login and signup using GraphQL and Passport.js.
- **Transaction Management**: Add, edit, and delete transactions with detailed categorization.
- **Dynamic Graphs**: Visualize financial data through dynamic charts using Chart.js.
- **Doughnut Chart Overview**: Breakdown of spending and savings in an easy-to-read chart.
- **Data Caching**: Optimized performance through Apollo Client's caching mechanism.
- **Session Management**: Secure sessions with MongoDB storage and Express-Session.
- **Modular Codebase**: Clearly structured frontend and backend directories for scalability.

## Tech Stack

### Frontend
- React.js (with Vite for fast builds)
- Tailwind CSS for modern styling
- Apollo Client for GraphQL queries and mutations
- React Router DOM for navigation
- Chart.js for visualizations

### Backend
- Node.js with Express
- GraphQL API using Apollo Server
- MongoDB for database storage
- Passport.js for authentication
- Mongoose for database modeling

## Directory Structure

```
.
├── backend/               # Server-side implementation
│   ├── db/                # MongoDB connection
│   ├── dummyData/         # Mock user and transaction data
│   ├── models/            # Mongoose schemas
│   ├── passport/          # Authentication config
│   ├── resolvers/         # GraphQL resolvers
│   ├── typeDefs/          # GraphQL schema definitions
│   └── index.js           # Server entry point
├── frontend/              # Client-side implementation
│   ├── src/               # React app source code
│   ├── public/            # Static files
│   ├── package.json       # Frontend dependencies
│   └── index.html         # Entry point for Vite
└── package.json           # Root project dependencies
```
