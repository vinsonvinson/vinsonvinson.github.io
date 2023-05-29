import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./App.css";

function App() {
  const navigate = useNavigate();
  let { name } = useParams();

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
        {/*Logo Kelompok jika diklik akan ke menuju About Us*/}
      </div>
      <div className="text-center mt-5 pt-5">
        <h1 className="title1">Congratulation {name}</h1>
        <h2 className="title2">You saved Beringkarsa kingdom and the land of Nusantara</h2>
        <img
          src="../../character/satrio.gif"
          className="satrio mx-5 mb-0"
          alt=""
        />
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
