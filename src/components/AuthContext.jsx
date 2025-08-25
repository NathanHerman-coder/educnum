import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Vérifier si un token est stocké dans le localStorage
    const token = localStorage.getItem("access_token");
    if (token) {
      setUser({ token }); // tu peux aussi décoder le token pour récupérer le username
    }
  }, []);

  const login = (token) => {
    localStorage.setItem("access_token", token);
    setUser({ token });
  };

  const logout = () => {
    localStorage.removeItem("access_token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
