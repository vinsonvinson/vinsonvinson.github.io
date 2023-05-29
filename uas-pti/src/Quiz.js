import React, { useState, useEffect } from "react";
import "./Quiz.css";

function Quiz() {
  const [data, setData] = useState(null);
  const [i, setIndex] = useState(0);

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=10&category=27")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, []);

  function nextQuestion() {
    if (i < 9) setIndex(i + 1);
  }

  function choice(props, i) {
    return (
      <button className="contBtn" onClick={nextQuestion}>
        {props}
      </button>
    );
  }

  function renderChoice() {
    if (data) {
      var j = 0;
      var answers = data.results[i].incorrect_answers;
      answers.push(data.results[i].correct_answer);
      answers = shuffle(answers);
      return answers.map((item) => (
        <button className="contBtn mx-2" onClick={nextQuestion}>
          <span>{item}</span>
        </button>
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

  return (
    <div className="Quiz-container overflow-hidden">
      <div className="m-5 p-3 fs-3 question-container d-flex justify-content-between">
        <div className="d-flex justify-content-start">
          <i className="fa-solid fa-plus statusIcon"></i>
          <div id="health" className="healthbar">
            <div className="bar">
              <div className="progress"></div>
            </div>
          </div>
        </div>
        <div>Level</div>
        <div className="d-flex justify-content-start">
          <i className="fa-solid fa-skull statusIcon"></i>
          <div id="enemy" className="enemybar">
            <div className="bar">
              <div className="progress"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-5 d-flex justify-content-around align-items-end">
        <img src="../character/satrio.gif" className="satrio" alt="" />
        <img src="../character/bromocakra.gif" className="monster" alt="" />
      </div>
      <div className="m-5 p-3 fs-3 question-container">
        {data ? <p>{data.results[i].question}</p> : "Loading..."}
      </div>
      <div className="text-center">
        {renderChoice()}
        <p>{JSON.stringify(data, null, 2)}</p>
      </div>
    </div>
  );
}

export default Quiz;
