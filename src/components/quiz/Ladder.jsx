import styles from "./Ladder.module.css";
function Ladder() {
  return (
    <div className={styles.ladder}>
      <h1>Money prize</h1>
      <ul>
        <li>$1,000,000</li>
        <li>$500,000</li>
        <li>$250,000</li>
        <li>$125,000</li>
        <li>$64,000</li>
        <li>$32,000</li>
        <li>$16,000</li>
        <li>$8,000</li>
        <li>$4,000</li>
        <li>$2,000</li>
        <li>$1,000</li>
        <li>$500</li>
        <li>$300</li>
        <li>$150</li>
        <li>$50</li>
      </ul>
    </div>
  );
}

export default Ladder;
