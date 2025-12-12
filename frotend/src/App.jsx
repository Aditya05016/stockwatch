import React from "react";
import {Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "../src/pages/login";
import Register from "../src/pages/Register";
import Dashboard from "./pages/dashbaord";
import WatchList from "./pages/watchlist";


function App(){

  return (

    <div>
      <Navbar />

      <Routes>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashbaord" element={<Dashboard />} />
        <Route path="/watchlist" element={<WatchList />} />
        
      </Routes>


    </div>
  )
}