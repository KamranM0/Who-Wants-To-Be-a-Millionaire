import { useNavigate } from "react-router-dom";
import Button from "./../Button";
import styles from "./FinishContainer.module.css";
import { useQuiz } from "../../context/QuizContext";
import { useEffect, useState } from "react";
function FinishContainer() {
  const {
    resetingQuiz,
    restartQuiz,
    handleStartGame,
    money,
    isCorrectSelected,
  } = useQuiz();
  const navigate = useNavigate();
  // useEffect(() => {
  //   resetQuiz();
  // }, [resetQuiz]);
  function handleGoToHome() {
    navigate("/");
  }
  function handleRestartGame() {
    resetingQuiz();
    navigate("/quiz");
  }
  return (
    <div className={styles.container}>
      <h1>Congratulations!</h1>
      <p>
        You earned <em>{money}$</em>
      </p>
      <div className={styles.button_container}>
        {/* <Button
          type={"primary"}
          style={{ fontSize: "23px", width: "12.5rem", height: "3.5rem" }}
        >
          See scoreboard
        </Button> */}
        <Button onClick={handleGoToHome} type={"primary"}>
          Go to home
        </Button>
        <Button onClick={handleRestartGame} type={"primary"} style={{}}>
          Restart game
        </Button>
      </div>
    </div>
  );
}

export default FinishContainer;
