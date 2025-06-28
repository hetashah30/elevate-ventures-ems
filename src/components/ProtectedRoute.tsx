import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/auth";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { currentUser } = useAuth();

  return currentUser ? <>{children}</> : <Navigate to="/auth" replace />;
};

export default ProtectedRoute;
