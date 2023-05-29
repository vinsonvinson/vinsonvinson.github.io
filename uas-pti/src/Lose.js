import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function App() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  const handleClick2 = () => {
    navigate("/aboutus");
  };

  return (
    <div className="containerwrap">
      <div className="header">
        <img
          className="logoUMN"
          src="https://seeklogo.com/images/U/universitas-multimedia-nusantara-umn-logo-48A807B801-seeklogo.com.png"
          alt="UMN"
        />
        <div className="text-center pt-5">
          <h1>Fantastic Nusantara</h1>
          <h3>Quiz Game</h3>
        </div>
        <img
          className="logoF4"
          src="../logo.png"
          alt="f4"
          onClick={handleClick2}
        />
        {/*Logo Kelompok jika diklik akan ke menuju About Us (jika ada)*/}
      </div>
      <div className="text-center mt-5 pt-5">
        <h1>You Lost</h1>
      </div>
      <br />
      <div className="start">
        <button
          className="startBtn"
          style={{ width: "200px" }}
          onClick={handleClick}
        >
          Play Again
        </button>
      </div>
    </div>
  );
}

export default App;
