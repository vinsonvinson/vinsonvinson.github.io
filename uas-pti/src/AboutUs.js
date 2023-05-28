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
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/1200px-Unknown_person.jpg"
                        alt=""
                        className="card-img"
                    />
                    <div className="card-body">
                        <div className="bg"></div>
                        <div className="bg"></div>
                        <div className="bg"></div>
                        <div className="content">
                            <h2 className="name">You Ya Lim</h2>
                            <p>00000070306</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-container col-lg-3 col-sm-6">
                <div className="card">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/1200px-Unknown_person.jpg"
                        alt=""
                        className="card-img"
                    />
                    <div className="card-body">
                        <div className="bg"></div>
                        <div className="bg"></div>
                        <div className="bg"></div>
                        <div className="content">
                            <h2 className="name">Mitawati</h2>
                            <p>00000070345</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-container col-lg-3 col-sm-6">
                <div className="card">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/1200px-Unknown_person.jpg"
                        alt=""
                        className="card-img"
                    />
                    <div className="card-body">
                        <div className="bg"></div>
                        <div className="bg"></div>
                        <div className="bg"></div>
                        <div className="content">
                            <h2 className="name">Rio Ferdinan</h2>
                            <p>00000070666</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-container col-lg-3 col-sm-6">
                <div className="card">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/1200px-Unknown_person.jpg"
                        alt=""
                        className="card-img"
                    />
                    <div className="card-body">
                        <div className="bg"></div>
                        <div className="bg"></div>
                        <div className="bg"></div>
                        <div className="content">
                            <h2 className="name">Vinson</h2>
                            <p>00000070870</p>
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
