import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function App() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [cate, setCate] = useState("");

  const handleClick = () => {
    if (name.trim() !== "" && cate.trim() !== "") {
      navigate("/story/" + name + "/" + cate);
    }
  };

  const handleClick2 = () => {
    navigate("/aboutus");
  };

  return (
    <div className="containerwrap">
      <div className="header">
        <img
          className="logoIndo"
          src="https://api2.kemenparekraf.go.id/storage/app/uploads/public/621/437/638/621437638c977337188787.png"
          alt="WonderfulIndonesia"
        />
        <img
          className="logoUMN"
          src="https://seeklogo.com/images/U/universitas-multimedia-nusantara-umn-logo-48A807B801-seeklogo.com.png"
          alt="UMN"
        />
        <img
          className="logoF4"
          src="https://seeklogo.com/images/F/Fantastic_Four-logo-95A3DB03CB-seeklogo.com.png"
          alt="f4"
          onClick={handleClick2}
        />
        {/*Logo Kelompok jika diklik akan ke menuju About Us (jika ada)*/}
      </div>
      <br />
      <div className="inputName">
        <input
          type="text"
          placeholder="INPUT NAME"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="text-center">
        <div className="select">
          <select onChange={(e) => setCate(e.target.value)}>
            <option value="">Select Category</option>
            <option value="any">Any Category</option>
            <option value="10">Books</option>
            <option value="11">Film</option>
            <option value="12">Music</option>
            <option value="13">Musicals & Theaters</option>
            <option value="14">Television</option>
            <option value="15">Video Games</option>
            <option value="16">Board Games</option>
            <option value="17">Science & Nature</option>
            <option value="18">Computers</option>
            <option value="19">Mathematics</option>
            <option value="20">Mythology</option>
            <option value="21">Sports</option>
            <option value="22">Geography</option>
            <option value="23">History</option>
            <option value="24">Politics</option>
            <option value="25">Art</option>
            <option value="26">Celebrities</option>
            <option value="27">Animals</option>
            <option value="28">Vehicles</option>
            <option value="29">Comics</option>
            <option value="30">Gadgets</option>
            <option value="31">Anime & Manga</option>
            <option value="32">Cartoon & Animation</option>
          </select>

          <div className="select_arrow"></div>
        </div>
      </div>
      <br />
      <div className="start">
        <button className="startBtn" onClick={handleClick}>
          START
        </button>
      </div>
    </div>
  );
}

export default App;
