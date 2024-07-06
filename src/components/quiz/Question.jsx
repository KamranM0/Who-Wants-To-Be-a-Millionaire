import { useQuiz } from "../../context/QuizContext";
import styles from "./Question.module.css";
import ReactSlider from "react-slider";
function Question({ children, deactiveOpts }) {
  const { numOfQuestion, secondsRemaining, DEFAULT_SEC } = useQuiz();
  return (
    <div className={styles.question_container}>
      <progress
        className={styles.progress_top}
        max={DEFAULT_SEC}
        value={secondsRemaining}
      />
      <header>
        <h2>Question {numOfQuestion}</h2>
      </header>
      <div className={styles.question_description}>
        <p>{children}</p>
      </div>

      <progress
        className={styles.progress_bottom}
        max={DEFAULT_SEC}
        value={secondsRemaining}
      />
    </div>
  );
}

export default Question;
