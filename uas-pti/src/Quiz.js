import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Quiz.css";

function Quiz() {
  const navigate = useNavigate();
  let { name } = useParams();
  let { cate } = useParams();
  const [data, setData] = useState(null);
  const [i, setIndex] = useState(0);
  const [enemyHealth, setEnemy] = useState(100);
  const [health, setHealth] = useState(100);
  const [level, setLevel] = useState(1);

  useEffect(() => {
    let url = "https://opentdb.com/api.php?amount=20&difficulty=easy";
    if (cate && cate !== "any") {
      url += "&category=" + cate;
    }
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, [cate]);
  
  function checkAnswer(ans) {
    if (ans === data.results[i].correct_answer) {
      if (i < 20) setIndex(i + 1);

      if (enemyHealth !== 10) {
        setEnemy(enemyHealth - 10);
      } else {
        if (level < 3) {
          setLevel(level + 1);
          setIndex(0);
          setEnemy(100);
          if (level >= 2) {
            let url = "https://opentdb.com/api.php?amount=20&difficulty=hard";
            if (cate && cate !== "any") {
              url += "&category=" + cate;
            }
            fetch(url)
              .then((response) => response.json())
              .then((json) => setData(json))
              .catch((error) => console.error(error));
          } else {
            let url = "https://opentdb.com/api.php?amount=20&difficulty=medium";
            if (cate && cate !== "any") {
              url += "&category=" + cate;
            }
            fetch(url)
              .then((response) => response.json())
              .then((json) => setData(json))
              .catch((error) => console.error(error));
          }
        } else {
          navigate("/win/" + name);
        }
      }
    } else {
      if (health !== 10) {
        if (i < 20) setIndex(i + 1);
        setHealth(health - 10);
      } else {
        navigate("/Lose");
      }
    }
  }

  function renderChoice() {
    if (data) {
      var answers = data.results[i].incorrect_answers;
      answers.push(data.results[i].correct_answer);
      answers = shuffle(answers);
      return answers.map((item, index) => (
        <button
          key={index}
          className="ansBtn mx-2"
          dangerouslySetInnerHTML={{
            __html: item,
          }}
          onClick={() => checkAnswer(item)}
        ></button>
      ));
    }
  }

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  let image;
  if (level === 1) {
    image = (
      <img src="../../character/bromocakra.gif" className="monster" alt="" />
    );
  } else if (level === 2) {
    image = (
      <img src="../../character/brajasambu.gif" className="monster" alt="" />
    );
  } else if (level === 3) {
    image = (
      <img src="../../character/malaupata.gif" className="monster" alt="" />
    );
  }

  return (
    <div className="Quiz-container overflow-hidden">
      <div className="m-5 p-3 fs-3 question-container d-flex justify-content-between">
        <div className="d-flex justify-content-start">
          <i className="fa-solid fa-plus statusIcon"></i>
          <div id="health" className="healthbar">
            <div className="bar">
              <div className="progress" style={{ width: health + "%" }}></div>
            </div>
          </div>
        </div>
        <div>Level {level}</div>
        <div className="d-flex justify-content-start">
          <i className="fa-solid fa-skull statusIcon"></i>
          <div id="enemy" className="enemybar">
            <div className="bar">
              <div
                className="progress"
                style={{ width: enemyHealth + "%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-5 d-flex justify-content-around align-items-end">
        <img src="../../character/satrio.gif" className="satrio" alt="" />
        {image}
      </div>
      <div
        className="m-5 p-3 fs-3 question-container"
        dangerouslySetInnerHTML={{
          __html: data ? data.results[i].question : "Loading...",
        }}
      ></div>
      <div className="buttoncontainer text-center">
        {renderChoice()}
        {/* <p>{JSON.stringify(data, null, 2)}</p> */}
      </div>
    </div>
  );
}

export default Quiz;
