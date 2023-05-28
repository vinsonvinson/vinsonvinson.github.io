import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import Story from "./Story";
import Quiz from "./Quiz";
import AboutUs from "./AboutUs";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/story/:name" element={<Story />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/aboutus" element={<AboutUs />} />
    </Routes>
  </Router>
);
