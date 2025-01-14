import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import TransactionPage from "./pages/TransactionPage.jsx";
import NotFound from "./pages/NotFound.jsx";
import Header from "./components/ui/Header.jsx"
function App() {
  const authUser = false;
  return (
    <> 
      {authUser && <Header />} 
      <Routes>
        <Route path ="/" element={ <HomePage /> } />
        <Route path ="/login" element={ <LoginPage /> } /> 
        <Route path ="/signup" element={ <SignUpPage /> } />
        <Route path ="/transaction/:id" element={ <TransactionPage /> } />
        <Route path ="*" element={ <NotFound /> } />   
      </Routes>
      {/* <Footer /> */}
    </>
  )
};
//
export default App
