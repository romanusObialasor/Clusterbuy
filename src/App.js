import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Mainpage from "./components/Mainpage";
import Register from "./components/Register";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
