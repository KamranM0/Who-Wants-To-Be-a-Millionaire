import { useEffect } from "react";
import Button from "../components/Button";
import Logo from "../components/Logo";
import NavBar from "../components/NavBar";
import styles from "./Homepage.module.css";
import { useNavigate } from "react-router-dom";
import { useQuiz } from "../context/QuizContext";

function HomePage() {
  const { handleStartGame } = useQuiz();
  const navigate = useNavigate();
  function handleStartButton() {
    navigate("quiz");
    handleStartGame();
  }
  return (
    <div>
      <NavBar />
      <div className={styles.home}>
        <Logo />
        <section className={styles.description}>
          <p>
            Step into the world of the iconic quiz show and test your knowledge
            to win big! Answer challenging questions, and climb the money
            ladder. Let&apos;s get started!
          </p>
        </section>
        <Button onClick={handleStartButton} type={`primary`}>
          Start
        </Button>
      </div>
    </div>
  );
}

export default HomePage;
