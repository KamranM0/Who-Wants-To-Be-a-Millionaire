import styles from "./PublicScreen.module.css";
function PublicScreen({
  shuffledOptions,
  percentages,
  setIsPublicScreenVisible,
}) {
  return (
    <div className={styles.overlay_bg}>
      <div className={styles.bar}>
        <h1>Ask the audience...</h1>
        <div className={styles.barOut}>
          <div className={styles.barInside}>
            {shuffledOptions.map((el, i) => (
              <div
                key={el}
                className={styles.barItem}
                style={{
                  height: `${percentages[i] * 2}px`,
                  width: "80px",
                  position: "relative",
                  backgroundColor: "white",
                }}
              >
                <h3>{percentages[i]}%</h3>
              </div>
            ))}
          </div>
          <div className={styles.barName}>
            {shuffledOptions.map((el) => (
              <p>{el}</p>
            ))}
          </div>
        </div>
        <button
          onClick={() => {
            setIsPublicScreenVisible(false);
          }}
        >
          OK
        </button>
      </div>
    </div>
  );
}

export default PublicScreen;
