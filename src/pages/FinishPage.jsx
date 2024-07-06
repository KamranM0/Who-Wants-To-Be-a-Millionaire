import styles from "./FinishPage.module.css";
import FinishContainer from "../components/finish/FinishContainer";
import Logo from "../components/Logo";
function FinishPage() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <Logo style={{ align: "center" }} />
      </div>
      <FinishContainer />
    </div>
  );
}

export default FinishPage;
