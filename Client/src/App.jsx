import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Single from "./Pages/Single";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Write from "./Pages/Write";
import EditBlog from "./Pages/EditBlog";
import PageNotFound from "./Components/PageNotFound";

const App = () => {
  return (
    <div id="top" className="relative z-10 min-h-full">
      <a href="#top">
        <img
          src="https://cdn-icons-png.freepik.com/256/15992/15992789.png?ga=GA1.1.224769648.1717002388&semt=ais_hybrid"
          className="fixed w-16 bottom-5 right-5 z-50"
        />
      </a>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/post/:id" element={<Single />}></Route>
        <Route path="/write" element={<Write />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/edit/:id" element={<EditBlog />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
