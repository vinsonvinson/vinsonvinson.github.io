import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import Story from "./Story";
import Quiz from "./Quiz";
import Win from "./Win";
import Lose from "./Lose";
import AboutUs from "./AboutUs";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/story/:name/:cate" element={<Story />} />
      <Route path="/quiz/:name/:cate" element={<Quiz />} />
      <Route path="/win/:name" element={<Win />} />
      <Route path="/lose" element={<Lose />} />
      <Route path="/aboutus" element={<AboutUs />} />
    </Routes>
  </Router>
);
