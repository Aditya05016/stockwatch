import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Login from "./pages/login";
import Register from "./pages/Register"
import Dashboard from "./pages/dashbaord"
import WatchList from "./pages/watchlist"

import AuthProvider from "./context/AuthContext";  // <-- ADD THIS

function App() {
  return (
    <AuthProvider>   {/* <-- WRAP WHOLE APP */}
      <div>
        <Navbar />

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashbaord" element={<Dashboard />} />
          <Route path="/watchlist" element={<WatchList />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
