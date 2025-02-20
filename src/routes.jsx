import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Orders from "./pages/Orders";  // ✅ Correct file path
import Contact from "./pages/Contact";
import Auth from "./pages/Auth";  // 🔹 Import Auth Page
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute"; // 🔹 Protect Routes

const AppRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/orders" element={<Orders />} />

        <Route path="/" element={<Auth />} />
        <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/search" element={<ProtectedRoute><Search /></ProtectedRoute>} />
        <Route path="/orders" element={<ProtectedRoute><Orders /></ProtectedRoute>} />
        <Route path="/contact" element={<ProtectedRoute><Contact /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
