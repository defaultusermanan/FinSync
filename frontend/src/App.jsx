import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import TransactionPage from "./pages/TransactionPage.jsx";
import NotFound from "./pages/NotFound.jsx";
import Header from "./components/ui/Header.jsx"
import { useQuery } from "@apollo/client";
import { GET_AUTHENTICATED_USER } from "./graphql/queries/user.query.js";
import { Toaster } from 'react-hot-toast';
function App() {
  const { loading, error, data} = useQuery(GET_AUTHENTICATED_USER);
  console.log("Loading: ",loading);
  console.log("Error: ",error);
  console.log("Data: ",data);
  if (loading) return null;
  return (
    <> 
      {data?.authUser && <Header />} 
      <Routes>
        <Route path ="/" element={data.authUser ? <HomePage /> : <Navigate to="/login"/> } />
        <Route path ="/login" element={!data.authUser ? <LoginPage /> : <Navigate to="/"/> } /> 
        <Route path ="/signup" element={!data.authUser ? <SignUpPage /> : <Navigate to="/"/> } />
        <Route path ="/transaction/:id" element={data.authUser ?  <TransactionPage /> : <Navigate to="/login"/>} />
        <Route path ="*" element={ <NotFound /> } />   
      </Routes>
      <Toaster /> 
      {/* <Footer /> */}
    </>
  )
};
//
export default App
