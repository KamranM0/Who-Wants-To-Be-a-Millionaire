import { useQuiz } from "../../context/QuizContext";
import styles from "./PhoneScreen.module.css";
function PhoneScreen({ setIsPhoneScreenVisible }) {
  const { currentQuestion } = useQuiz();
  return (
    <div className={styles.overlay_bg}>
      <div className={styles.phone}>
        <h1>Phone Call to a friend...</h1>
        <div className={styles.phoneInside}>
          <p>
            <em>Friend:</em> I think the answer is{" "}
            {`"${currentQuestion.correctAnswer}"`}
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width={200}
            height={200}
          >
            <path d="M39.031,47c-0.016,0-0.032,0-0.047,0c-7.517-0.245-16.321-7.53-22.388-13.6C10.524,27.329,3.239,18.521,3.002,11.038 C2.918,8.413,9.361,3.746,9.426,3.701c1.671-1.166,3.527-0.753,4.289,0.302c0.515,0.714,5.397,8.116,5.928,8.955 c0.552,0.869,0.471,2.166-0.218,3.469c-0.377,0.72-1.636,2.933-2.225,3.965c0.634,0.906,2.32,3.127,5.798,6.604 c3.477,3.477,5.697,5.164,6.606,5.801c1.032-0.589,3.244-1.848,3.966-2.228c1.28-0.679,2.571-0.763,3.451-0.225 c0.896,0.549,8.275,5.455,8.955,5.931c0.572,0.4,0.94,1.089,1.011,1.89c0.071,0.809-0.177,1.664-0.699,2.409 C46.245,40.638,41.633,47,39.031,47z" />
          </svg>
        </div>
        <button
          onClick={() => {
            setIsPhoneScreenVisible(false);
          }}
        >
          OK
        </button>
      </div>
    </div>
  );
}

export default PhoneScreen;
