import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import { AuthContext, AuthProvider } from "./context/AuthProvider";

const App = () => {
  const { loggedin } = useContext(AuthContext);

  return (
    <>
      {loggedin && <Navbar />}
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
