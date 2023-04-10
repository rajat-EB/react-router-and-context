import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

// export const useAuth = useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [loggedin, setLoggedin] = useState(false);

  const loginTrue = async () => {
    setLoggedin(true);
  };

  return (
    <AuthContext.Provider value={{ loggedin, loginTrue }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
