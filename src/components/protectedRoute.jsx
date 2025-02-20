import React from "react";
import { Navigate } from "react-router-dom";

// ✅ Protects routes - Redirects to login if user is NOT logged in
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token"); // 🔹 Check if user is logged in

  return token ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
