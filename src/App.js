import React from "react";
import { ToastContainer } from "react-toastify";
import Signin from "./component/Signin";
import Signup from "./component/SignUp";
import Account from "./component/Account";
import { Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./component/ProtectedRoute";
import Home from "./pages/Home";
import "react-toastify/dist/ReactToastify.css";
import Reset from "./component/Reset";
import Choose from "./component/Choose";
import ClientHome from "./component/Client/Client_home";
import Main from './component/Client/Main'
import Contact from "./pages/Contact";
import About from "./pages/AboutPage";
function App() {
  return (
    <>
      <AuthContextProvider>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element ={<Contact/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/register" element={<Signup />} />
          <Route path="/login" element={<Signin />} />
          <Route path="/reset" element={<Reset />}></Route>
          <Route path="/option" element={<Choose />}></Route>
          <Route path="/client_home" element={<ClientHome/>}></Route>
          <Route path="/main" element={<Main/>}></Route>
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
