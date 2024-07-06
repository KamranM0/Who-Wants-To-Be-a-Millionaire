import QuizNavBar from "./../components/quiz/QuizNavBar";
import Question from "./../components/quiz/Question";
import Jokers from "./../components/quiz/Jokers";
import Options from "./../components/quiz/Options";
import { useQuiz } from "../context/QuizContext";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { generatePercentage, selectTwo } from "../utils/QuestionsUtil";
import PhoneScreen from "../components/quiz/PhoneScreen";
import PublicScreen from "../components/quiz/PublicScreen";

function Quiz() {
  const { currentQuestion, tickTimer, secondsRemaining } = useQuiz();
  const [deactiveOpts, setDeactiveOpts] = useState(null);
  const [isPhoneScreenVisible, setIsPhoneScreenVisible] = useState(false);
  const navigate = useNavigate();
  const [shuffledOptions, setShuffledOptions] = useState([]);
  const [index, setIndex] = useState(null);
  const [isPublicScreenVisible, setIsPublicScreenVisible] = useState(false);
  const [percentages, setPercentages] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      tickTimer();
    }, 1000);
    if (secondsRemaining === 0) {
      navigate("finish");
    }
    return () => clearInterval(interval);
  }, [tickTimer, secondsRemaining, navigate]);

  function handlePhoneScreen() {
    setIsPhoneScreenVisible(true);
    setTimeout(() => setIsPhoneScreenVisible(false), 5000);
  }
  function handlePublicScreen() {
    setIsPublicScreenVisible(true);
    const percentages = generatePercentage(index);
    setPercentages([...percentages]);
  }
  return (
    <div>
      <QuizNavBar />
      <Question deactiveOpts={deactiveOpts}>
        {currentQuestion.question}
      </Question>
      <Jokers
        selectTwo={selectTwo}
        setDeactiveOpts={setDeactiveOpts}
        handlePhoneScreen={handlePhoneScreen}
        handlePublicScreen={handlePublicScreen}
      />
      <Options
        shuffledOptions={shuffledOptions}
        deactiveOpts={deactiveOpts}
        setShuffledOptions={setShuffledOptions}
        setIndex={setIndex}
      />
      {isPhoneScreenVisible && (
        <PhoneScreen setIsPhoneScreenVisible={setIsPhoneScreenVisible} />
      )}
      {isPublicScreenVisible && (
        <PublicScreen
          shuffledOptions={shuffledOptions}
          setIsPublicScreenVisible={setIsPublicScreenVisible}
          percentages={percentages}
        />
      )}
    </div>
  );
}

export default Quiz;
