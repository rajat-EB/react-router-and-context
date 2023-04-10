import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loggedin, loginTrue } = useContext(AuthContext);

  const navigate = useNavigate();

//   useEffect(() => {
//     if (loggedin) {
//       navigate("/");
//     }
//   });

  const login = async (e) => {
    e.preventDefault();
    if (email === "123@abc.com" && password === "1234") {
      await loginTrue();
      navigate("/");
    }
  };

  return (
    <>
      <form onSubmit={login}>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default Login;
