import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Auth/Login";
import Signup from "../pages/Auth/Signup";
import Home from "../pages/Home";
import VendorProfile from "../pages/VendorProfile";

export default function RoutesHandler() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home status="Loaded" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/:celeb" element={<VendorProfile />} />
      </Routes>
    </BrowserRouter>
  );
}
