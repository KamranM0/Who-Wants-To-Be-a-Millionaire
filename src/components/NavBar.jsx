import { Link, NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
function NavBar() {
  return (
    <div className={styles.nav}>
      <ul>
        <li>
          <NavLink className={styles.scoreboard} to="scoreboard">
            Scoreboard
          </NavLink>
        </li>

        <li>
          <NavLink className={styles.ctaLink} to="login">
            Login
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
