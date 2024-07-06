import { useEffect } from "react";
import { useQuiz } from "../../context/QuizContext";
import { shuffleArray } from "../../utils/QuestionsUtil";
import Option from "./Option";
import styles from "./Options.module.css";
function Options({
  deactiveOpts,
  shuffledOptions,
  setShuffledOptions,
  setIndex,
}) {
  const { currentQuestion } = useQuiz();
  useEffect(() => {
    const options = [
      currentQuestion.correctAnswer,
      ...currentQuestion.otherAnswers,
    ];
    const { array: shuffledArray, index: correctIndex } = shuffleArray(
      options,
      currentQuestion.correctAnswer
    );
    setShuffledOptions(shuffledArray);
    setIndex(correctIndex);
  }, [currentQuestion, setIndex, setShuffledOptions]);
  return (
    <div className={styles.options}>
      <ul>
        {shuffledOptions.map((option) => (
          <li key={option}>
            <Option
              type={
                option === currentQuestion.correctAnswer
                  ? "option_clicked_correct"
                  : "option_clicked_wrong"
              }
              disabled={deactiveOpts?.includes(option)}
              isGrayed={deactiveOpts?.includes(option)}
              isCorrect={option === currentQuestion.correctAnswer}
            >
              {option}
            </Option>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Options;
