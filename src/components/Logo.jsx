import styles from "./Logo.module.css";
function Logo({ type, style }) {
  return (
    <img
      className={`${styles.image} ${styles[type]}`}
      src="/logo.png"
      alt="logo"
      style={{ style }}
    ></img>
  );
}

export default Logo;
