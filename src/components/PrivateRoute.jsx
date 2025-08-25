import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

export default function PrivateRoute({ children }) {
  const { user } = useContext(AuthContext);

  if (!user) {
    // Redirige vers la page de login si non connecté
    return <Navigate to="/login" replace />;
  }

  return children;
}
