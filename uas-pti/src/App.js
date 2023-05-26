import React from 'react';
import './App.css';

function App() {
  return (
    <div className="containerwrap">
      <div className="header">
        <img className="logoIndo"
             src='https://api2.kemenparekraf.go.id/storage/app/uploads/public/621/437/638/621437638c977337188787.png'
             alt='WonderfulIndonesia'></img>
        <img className="logoUMN"
             src='https://seeklogo.com/images/U/universitas-multimedia-nusantara-umn-logo-48A807B801-seeklogo.com.png'
             alt='UMN'></img>
        <img className='logoF4'
             src='https://seeklogo.com/images/F/Fantastic_Four-logo-95A3DB03CB-seeklogo.com.png'
             alt='f4'></img>
             {/*Logo Kelompok jika diklik akan ke menuju About Us (jika ada)*/}
      </div>
      <br />
      <div className="inputName">
        <input type='name' placeholder='INPUT NAME'></input>
      </div>
      <br />
      <div className='start'>
        <button className='startBtn'>START</button>
      </div>
    </div>
  );
}

export default App;
