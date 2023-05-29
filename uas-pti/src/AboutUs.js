import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AboutUs.css';

function AboutUs() {
  const navigate = useNavigate();

  const handleClick = () => {
      navigate('/');
  };

  return (
    <div className="aboutus-container">
        <div className='heading'>
            <h1 className='headQuote'>Hover over the card to find us!</h1>
        </div>
        <div className="row">
            <div className="card-container col-lg-3 col-sm-6">
                <div className="card">
                    <img
                        src="../You Ya Lim.jpg"
                        alt=""
                        className="card-img"
                    />
                    <div className="card-body">
                        <div className="bg"></div>
                        <div className="bg"></div>
                        <div className="bg"></div>
                        <div className="content">
                            <h2 className="name">You Ya Lim</h2>
                            <p className="nim">00000070306</p>
                            <a className="ig" href="https://www.instagram.com/_kepalasuku_/">@_kepalasuku_</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-container col-lg-3 col-sm-6">
                <div className="card">
                    <img
                        src="../Mitawati.jpg"
                        alt=""
                        className="card-img"
                    />
                    <div className="card-body">
                        <div className="bg"></div>
                        <div className="bg"></div>
                        <div className="bg"></div>
                        <div className="content">
                            <h2 className="name">Mitawati</h2>
                            <p className="nim">00000070345</p>
                            <a className="ig" href="https://www.instagram.com/tamita.wp06/">@tamita.wp06</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-container col-lg-3 col-sm-6">
                <div className="card">
                    <img
                        src="../Rio Ferdinan.jpg"
                        alt=""
                        className="card-img"
                    />
                    <div className="card-body">
                        <div className="bg"></div>
                        <div className="bg"></div>
                        <div className="bg"></div>
                        <div className="content">
                            <h2 className="name">Rio Ferdinan</h2>
                            <p className="nim">00000070666</p>
                            <a className="ig" href="https://www.instagram.com/riohu__/">@riohu__</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-container col-lg-3 col-sm-6">
                <div className="card">
                    <img
                        src="../Vinson.jpg"
                        alt=""
                        className="card-img"
                    />
                    <div className="card-body">
                        <div className="bg"></div>
                        <div className="bg"></div>
                        <div className="bg"></div>
                        <div className="content">
                            <h2 className="name">Vinson</h2>
                            <p className="nim">00000070870</p>
                            <a className="ig" href="https://www.instagram.com/vinson.ll/">@vinson.ll</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <button className="homeBtn" onClick={handleClick}>Back to Main Page</button>
    </div>
  );
}

export default AboutUs;
