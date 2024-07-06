import { useState } from "react";
import { useQuiz } from "../../context/QuizContext";
import styles from "./Option.module.css";
import Button from "../Button";
import { useNavigate } from "react-router-dom";

function Option({ children, type, isCorrect, disabled, isGrayed }) {
  const {
    numOfQuestion,
    handleNextQuestion,
    isAnswered,
    handleOptionClick,
    currentQuestion,
    setIsCorrectSelected,
    handleAnswered,
  } = useQuiz();
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);

  async function handleClick() {
    setIsClicked(true);
    handleAnswered();
    if (!isCorrect) {
      setTimeout(() => {
        setIsClicked(false);
        handleOptionClick(false);
        return navigate("finish");
      }, 2500);
    } else {
      setTimeout(() => {
        setIsClicked(false);
        handleOptionClick(true);
        if (numOfQuestion === 15) return navigate("finish");
      }, 2500);
    }

    // setTimeout(() => {
    //   // if (!isCorrect) {
    //   //   return navigate("finish");}
    //    else if (numOfAnswered === 15) return navigate("finish");
    //   else {
    //     handleNextQuestion();
    //     // setIsCorrectSelected(true);
    //     setIsClicked(false);
    //   }
    // }, 700);
  }
  return (
    <button
      disabled={isAnswered || disabled}
      className={`${isClicked && styles[type]} ${
        isAnswered && isCorrect && !isClicked && styles.option_wrong_correct
      }  ${styles.option} ${isGrayed ? styles.option_grayed : ""}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

export default Option;
