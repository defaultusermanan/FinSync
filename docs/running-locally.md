# Running Locally

Follow these steps to run the FinSync application locally:

## Backend

1. **Navigate to the Backend Directory**
   ```bash
   cd backend
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**
   Create a `.env` file in the `backend/` directory with the following content:
   ```env
   MONGO_URI=your-mongodb-uri
   SESSION_SECRET=your-secret-key
   ```

4. **Start the Backend Server**
   ```bash
   npm run dev
   ```

5. **Access the GraphQL Playground**
   Open `http://localhost:4000/graphql` in your browser.

## Frontend

1. **Navigate to the Frontend Directory**
   ```bash
   cd frontend
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start the Frontend Server**
   ```bash
   npm run dev
   ```

4. **Access the Application**
   Open `http://localhost:3000` in your browser.
