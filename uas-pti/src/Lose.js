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
        <div className="title text-center pt-5">
          <h1 className="title1">Fantastic Nusantara</h1>
          <h3 className="title2">Quiz Game</h3>
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
        <h1 className="lostmsg">You Lost</h1>
        <div className="defeat">
          <img
            src="../../character/bromocakra.gif"
            className="monster mt-5"
            alt=""
          />
          <img
            src="../../character/brajasambu.gif"
            className="monster mt-5"
            alt=""
          />
          <img
            src="../../character/malaupata.gif"
            className="monster mt-5"
            alt=""
          />
        </div>
      </div>
      <br />
      <div className="start">
        <button
          className="backBtn"
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
