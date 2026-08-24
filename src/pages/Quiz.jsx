import { useState } from "react";
import Navbar from "../components/Navbar";
import quizData from "../data/quizData";
import "./Quiz.css";

function Quiz() {

  const [current, setCurrent] = useState(0);

  const [selected, setSelected] =
    useState(null);

  const [score, setScore] =
    useState(0);

  const [finished, setFinished] =
    useState(false);

  const question = quizData[current];

  const selectAnswer = (option) => {

    if (selected) return;

    setSelected(option);

    if (option === question.answer) {
      setScore(prev => prev + 1);
    }
  };

  const nextQuestion = () => {

    if (current === quizData.length - 1) {
      setFinished(true);
      return;
    }

    setCurrent(prev => prev + 1);

    setSelected(null);
  };

  if (finished) {

    return (
      <div className="quiz-page">

        <Navbar />

        <div className="quiz-result">

          <div className="badge">
            🏆
          </div>

          <p className="section-label">
            HERITAGE EXPERIENCE COMPLETED
          </p>

          <h1>
            Heritage Explorer
          </h1>

          <p>
            You scored
          </p>

          <strong>
            {score}/{quizData.length}
          </strong>

          <p>
            Keep exploring Odisha's heritage
            and discover more stories.
          </p>

        </div>

      </div>
    );
  }

  return (
    <div className="quiz-page">

      <Navbar />

      <main className="quiz-container">

        <p className="section-label">
          TEST YOUR KNOWLEDGE
        </p>

        <h1>
          Odisha Heritage
          <span> Quiz</span>
        </h1>

        <div className="quiz-progress">
          Question {current + 1} / {quizData.length}
        </div>

        <div className="question-card">

          <h2>
            {question.question}
          </h2>

          <div className="options">

            {question.options.map(option => {

              let className = "option";

              if (selected) {

                if (option === question.answer) {
                  className += " correct";
                }

                else if (option === selected) {
                  className += " wrong";
                }

              }

              return (
                <button
                  key={option}
                  className={className}
                  onClick={() =>
                    selectAnswer(option)
                  }
                >
                  {option}
                </button>
              );

            })}

          </div>

          {selected && (
            <div className="explanation">
              {question.explanation}
            </div>
          )}

          {selected && (
            <button
              className="primary-btn"
              onClick={nextQuestion}
            >
              {current === quizData.length - 1
                ? "Finish Quiz"
                : "Next Question →"}
            </button>
          )}

        </div>

      </main>

    </div>
  );
}

export default Quiz;