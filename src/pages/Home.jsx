import React, { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { loggedin } = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (loggedin === false) {
      navigate("/login");
    }
  });

  return <div>Home</div>;
};

export default Home;
