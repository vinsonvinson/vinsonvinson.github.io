import React, { useState, useEffect } from "react";
import { useNavigate, useParams} from "react-router-dom";
import "./Story.css";
import Typewriter from "typewriter-effect";

function Story(props) {
  const navigate = useNavigate();
  let { name } = useParams();
  let { cate } = useParams();
  const [isComplete, setIsComplete] = useState(false);
  const [isComplete2, setIsComplete2] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const handleClick = () => {
    navigate("/quiz/" + name + "/" + cate);
  };

  const handleComplete = () => {
    setIsComplete(true);
  };

  const handleComplete2 = () => {
    setIsComplete2(true);
  };

  useEffect(() => {
    if (isComplete2) {
      setShowButton(true);
    }
  }, [isComplete2]);

  return (
    <div className="overflow-hidden">
      <div className="text-center mt-5">
        <img
          src="../../character/satrio.gif"
          className="satrio mx-5 mb-0"
          alt=""
        />
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
      <div className="centerstory">
        <div className="m-5 p-3 fs-4 story-container">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .pauseFor(720)
                .typeString(
                  `In the land of Nusantara, there lived a peaceful society in a kingdom called Beringkarsa.
                  However, the peace was disturbed by the attacks of 3 legendary monsters named Malaupata, Bromocakra, and Brajasambu.
                  The king sent his trusted knight, ` +name+`, to protect the kingdom and defeat the three monsters.`
                )
                .pauseFor(1800)
                .callFunction(handleComplete)
                .start();
            }}
            options={{
              delay: 40,
              cursor: "",
            }}
          />
          <br />
          {isComplete && (
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    "<span style='font-weight: bold;'>Will " +name+" be able to achieve victory and save the land of Nusantara? It all depends on you as the hero.</span>"
                  )
                  .pauseFor(1000)
                  .callFunction(handleComplete2)
                  .start();
              }}
              options={{
                delay: 30,
                cursor: "",
              }}
            />
          )}
        </div>
        {showButton && (
          <div className="text-center">
            <button className="contBtn" onClick={handleClick}>Continue</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Story;
