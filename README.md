# FinSync

**FinSync** is a comprehensive financial synchronization application that provides users with tools to track, categorize, and analyze their financial transactions seamlessly. Built with a robust backend and modern frontend technologies, it ensures a user-friendly experience while maintaining security and scalability.

---

## Features

- **User Authentication**: Secure login and signup using GraphQL and Passport.js.
- **Transaction Management**: Add, edit, and delete transactions with detailed categorization.
- **Dynamic Graphs**: Visualize financial data through dynamic charts using Chart.js.
- **Doughnut Chart Overview**: Breakdown of spending and savings in an easy-to-read chart.
- **Data Caching**: Optimized performance through Apollo Client's caching mechanism.
- **Session Management**: Secure sessions with MongoDB storage and Express-Session.
- **Modular Codebase**: Clearly structured frontend and backend directories for scalability.

---

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

---

## Directory Structure

```
.
├── COPY-PASTE.md          # Command setups
├── NOTES.md               # Project insights
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

---

## Installation and Setup

### Prerequisites

Ensure you have the following installed:
- Node.js
- npm
- MongoDB instance

### Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/doomdybbuk-finsync.git
   cd doomdybbuk-finsync
   ```

2. **Install Dependencies**
   ```bash
   npm install # For backend dependencies
   cd frontend
   npm install # For frontend dependencies
   ```

3. **Configure Environment Variables**
   Create a `.env` file in the root directory and add the following:
   ```env
   MONGO_URI=your-mongodb-uri
   SESSION_SECRET=your-secret-key
   ```

4. **Run the Application**
   ```bash
   # Start backend
   npm run dev

   # Start frontend
   cd frontend
   npm run dev
   ```

5. **Access the Application**
   - Frontend: `http://localhost:3000`
   - Backend GraphQL Playground: `http://localhost:4000/graphql`

---

## Usage

1. Sign up and log in to access the app.
2. Add transactions with details like amount, category, and date.
3. View a breakdown of transactions on the homepage.
4. Edit or delete existing transactions.

---

## Key Notes

### Caching
Apollo Client is configured to cache GraphQL query results, ensuring faster responses for repeated requests.

### Security
- Sessions are stored securely using MongoDB and are HTTP-only, preventing JavaScript access.
- Passwords are hashed with bcrypt.

---

## Contributing

1. Fork the repository.
2. Create a new branch for your feature: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m 'Add feature'`.
4. Push to your branch: `git push origin feature-name`.
5. Open a pull request.

---

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## Acknowledgments

- [React.js](https://reactjs.org/)
- [GraphQL](https://graphql.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [MongoDB](https://www.mongodb.com/)
- [Apollo Server](https://www.apollographql.com/docs/apollo-server/)

---

## Screenshots
![Screenshot 2025-01-21 143435](https://github.com/user-attachments/assets/09ede8db-cbf8-4648-8098-e4a22550769a)

![Screenshot 2025-01-21 143441](https://github.com/user-attachments/assets/03a1e748-81db-4516-aa45-4413e639e77c)

![Screenshot 2025-01-21 143412](https://github.com/user-attachments/assets/040f1786-a09f-47af-9d95-439d6782cd03)

![Screenshot 2025-01-21 143329](https://github.com/user-attachments/assets/2ea79139-c296-4f07-ae28-eeda240bb213)

![Screenshot 2025-01-21 143233](https://github.com/user-attachments/assets/6e0c23e9-4be3-48e8-a61c-ccef35036ce9)
