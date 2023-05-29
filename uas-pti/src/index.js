import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from 'framer-motion';
import App from "./App";
import Story from "./Story";
import Quiz from "./Quiz";
import Win from "./Win";
import Lose from "./Lose";
import AboutUs from "./AboutUs";

function AppWithTransitions() {
  const location = useLocation();

  return (
    <AnimatePresence mode='wait'>
      <motion.div key={location.pathname} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <Routes location={location}>
          <Route path="/" element={<App />} />
          <Route path="/story/:name/:cate" element={<Story />} />
          <Route path="/quiz/:name/:cate" element={<Quiz />} />
          <Route path="/win/:name" element={<Win />} />
          <Route path="/lose" element={<Lose />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <AppWithTransitions />
  </Router>,
);