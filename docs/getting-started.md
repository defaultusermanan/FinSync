# Getting Started

## Prerequisites

Ensure you have the following installed:
- Node.js
- npm
- MongoDB instance

## Installation and Setup

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

## Usage

1. Sign up and log in to access the app.
2. Add transactions with details like amount, category, and date.
3. View a breakdown of transactions on the homepage.
4. Edit or delete existing transactions.
