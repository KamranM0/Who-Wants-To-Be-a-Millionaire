import { NavLink } from "react-router-dom";
import styles from "./QuizNavBar.module.css";
import Logo from "../../components/Logo";
import Button from "./../Button";
import { useQuiz } from "../../context/QuizContext";
function QuizNavBar() {
  const { shownMoney } = useQuiz();
  return (
    <div className={styles.nav}>
      <NavLink to={"/"}>
        <Logo type={"nav"} />
      </NavLink>
      <ul>
        <li>
          <NavLink to="ladder">${shownMoney}</NavLink>
        </li>
        <li>
          <NavLink to={"/"}>
            <Button type={"primary"}>Quit</Button>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default QuizNavBar;
