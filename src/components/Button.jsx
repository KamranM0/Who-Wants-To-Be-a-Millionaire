import { NavLink } from "react-router-dom";
import styles from "./Button.module.css";
function Button({ onClick, type, style, children, isDisabled }) {
  return (
    <button
      disabled={isDisabled}
      onClick={onClick}
      className={`${styles[type]} btn`}
      style={style}
    >
      {children}
    </button>
  );
}

export default Button;
