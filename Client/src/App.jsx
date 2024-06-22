import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Single from "./Pages/Single";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Write from "./Pages/Write";

const App = () => {
  return (
    <div className="relative z-10">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/post/:id" element={<Single />}></Route>
        <Route path="/write" element={<Write />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
