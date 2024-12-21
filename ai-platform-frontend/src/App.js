import React from "react";
import Header from "./components/Header"; // Example component
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Signup from "./components/signup";

function App() {
  return (
    <div className="App">
      <Header />
      <Homepage />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
