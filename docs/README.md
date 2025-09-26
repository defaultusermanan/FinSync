# FinSync

FinSync is a full-stack application designed for managing and tracking financial transactions.

## Features
- User authentication and management
- Add, edit, delete, and view transactions
- Categorize and filter transactions
- Interactive UI designed for simplicity and responsiveness

## Project Structure
- **backend/**: All server-side code, including database models, type definitions, resolvers, and configurations.
- **frontend/**: Client-side application using modern web technologies.

### Prerequisites
- Node.js v16+
- MongoDB v5+
- NPM or Yarn package manager

## Setup Instructions

### Backend
1. Navigate to the backend directory:
```bash
cd backend
```
2. Install dependencies:
```bash
npm install
```
3. Create a `.env` file in the `backend/` directory and include the following variables:
```
PORT=4000
MONGO_URI=your_mongodb_uri_here
JWT_SECRET=your_jwt_secret_here
```
4. Start the server:
```bash
npm start
```

### Frontend
1. Navigate to the frontend directory:
```bash
cd frontend
```
2. Install dependencies:
```bash
npm install
```
3. Run the development server:
```bash
npm run dev
```

### Build for Production
To build the frontend for production:
```bash
npm run build
```

## Screenshots
- Login Screen ![Login](Screenshot%202025-01-20%20113453.png)
- Dashboard ![Dashboard](Screenshot%202025-01-20%20113501.png)

## License
This project is licensed under the MIT License.