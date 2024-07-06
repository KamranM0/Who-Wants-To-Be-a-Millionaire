import styles from "./Jokers.module.css";
import Button from "../Button";
import { useState } from "react";
import { useQuiz } from "../../context/QuizContext";
function Jokers({
  selectTwo,
  setDeactiveOpts,
  handlePhoneScreen,
  handlePublicScreen,
}) {
  const [isFiftyUsed, setIsFiftyUsed] = useState(false);
  const [isPhoneUsed, setIsPhoneUsed] = useState(false);
  const [isPublicUsed, setIsPublicUsed] = useState(false);
  const { currentQuestion } = useQuiz();
  function handleFifty() {
    setDeactiveOpts(() => selectTwo([...currentQuestion.otherAnswers]));
    setIsFiftyUsed(true);
  }
  function handlePhone() {
    handlePhoneScreen();
    setIsPhoneUsed(true);
  }
  function handlePublic() {
    handlePublicScreen();
    setIsPublicUsed(true);
  }
  return (
    <div className={styles.jokers_container}>
      <ul>
        <li>
          <Button
            type={!isPublicUsed ? "joker" : "joker_used"}
            isDisabled={isPublicUsed}
            onClick={handlePublic}
          >
            <svg
              height="45px"
              width="45px"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 28.832 28.832"
              xml:space="preserve"
            >
              <g>
                <path
                  style={{}}
                  d="M11.98,5.373c0-1.584,1.284-2.869,2.869-2.869s2.869,1.284,2.869,2.869s-1.284,2.869-2.869,2.869
		S11.98,6.957,11.98,5.373z M15.716,15.621c0.616-0.658,1.479-1.075,2.575-1.245c0.249-0.038,0.513-0.061,0.786-0.077
		c0.088-0.003,0.171-0.012,0.259-0.012h1.707c-1.253-0.521-2.141-1.761-2.141-3.203c0-0.575,0.143-1.12,0.394-1.596
		c-0.89-0.325-1.711-0.32-1.711-0.32h-5.753c-0.643,0.015-1.183,0.096-1.636,0.23c0.281,0.5,0.442,1.076,0.442,1.686
		c0,1.442-0.887,2.681-2.142,3.203h1.412c0.017-0.002,0.033-0.002,0.051-0.002c0.1,0,0.209,0.004,0.319,0.012
		c0.235,0.017,0.492,0.053,0.758,0.107c1.444,0.303,3.186,1.253,3.379,3.527l0.002,0.051v1.774h0.362l0.002-1.774
		C14.779,17.957,14.729,16.675,15.716,15.621z M6.993,13.983c1.582,0,2.869-1.287,2.869-2.871S8.575,8.243,6.993,8.243
		c-1.584,0-2.869,1.285-2.869,2.869C4.124,12.695,5.41,13.983,6.993,13.983z M9.728,14.908H3.976
		c-4.118,0.076-3.975,3.103-3.975,3.103L0,25.067h0.004c0,0.017-0.003,0.035-0.003,0.05c0,0.67,0.545,1.211,1.213,1.211
		c0.669,0,1.209-0.541,1.209-1.211c0-0.016-0.002-0.033-0.005-0.05h0.005v-6.532h0.758l-0.006,6.958l7.266,0.006l-0.006-6.996h0.786
		v6.563h0.004c0,0.003,0,0.006,0,0.01c0,0.669,0.541,1.211,1.207,1.211c0.669,0,1.211-0.542,1.211-1.211c0-0.004,0-0.007,0-0.01
		V18.01C13.378,14.861,9.728,14.908,9.728,14.908z M22.185,13.982c1.585,0,2.87-1.285,2.87-2.87s-1.285-2.87-2.87-2.87
		s-2.87,1.285-2.87,2.87C19.316,12.697,20.6,13.982,22.185,13.982z M24.921,14.908h-5.754c-4.119,0.076-3.973,3.103-3.973,3.103
		l-0.002,7.056h0.005c0,0.017-0.003,0.035-0.003,0.05c0,0.67,0.544,1.211,1.212,1.211c0.669,0,1.208-0.541,1.208-1.211
		c0-0.016-0.003-0.033-0.004-0.05h0.004v-6.532h0.76l-0.009,6.958l7.266,0.006l-0.006-6.996h0.786v6.563h0.002
		c0,0.003,0,0.006,0,0.01c0,0.669,0.542,1.211,1.21,1.211c0.667,0,1.209-0.542,1.209-1.211c0-0.004,0-0.007,0-0.01V18.01
		C28.57,14.861,24.921,14.908,24.921,14.908z"
                />
              </g>
            </svg>
          </Button>
        </li>
        <li>
          <Button
            isDisabled={isPhoneUsed}
            type={!isPhoneUsed ? "joker" : "joker_used"}
            onClick={handlePhone}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              version="1.1"
              width="40px"
              height="40px"
              viewBox="0 0 250 250"
              xml:space="preserve"
            >
              <defs></defs>
              <g
                className={styles.phone}
                transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
              >
                <path
                  d="M 38.789 51.211 l 10.876 10.876 c 0.974 0.974 2.471 1.194 3.684 0.543 l 13.034 -6.997 c 0.964 -0.518 2.129 -0.493 3.07 0.066 l 19.017 11.285 c 1.357 0.805 1.903 2.489 1.268 3.933 c -1.625 3.698 -4.583 10.476 -5.758 13.473 c -0.247 0.631 -0.615 1.209 -1.127 1.652 c -12.674 10.986 -37.89 -2.4 -57.191 -21.701 C 6.358 45.039 -7.028 19.823 3.958 7.149 c 0.444 -0.512 1.022 -0.88 1.652 -1.127 c 2.996 -1.175 9.775 -4.133 13.473 -5.758 c 1.444 -0.635 3.128 -0.089 3.933 1.268 l 11.285 19.017 c 0.558 0.941 0.583 2.106 0.066 3.07 L 27.37 36.651 c -0.651 1.213 -0.431 2.71 0.543 3.684 C 27.913 40.335 38.789 51.211 38.789 51.211 z"
                  className={styles.path_1}
                  transform=" matrix(1 0 0 1 0 0) "
                  stroke-linecap="round"
                />
                <path
                  d="M 90 49.5 h -9 C 81 27.168 62.832 9 40.5 9 V 0 C 67.794 0 90 22.206 90 49.5 z"
                  className={styles.path_2}
                  transform=" matrix(1 0 0 1 0 0) "
                  stroke-linecap="round"
                />
                <path
                  d="M 72.5 49.5 h -9 c 0 -12.682 -10.317 -23 -23 -23 v -9 C 58.145 17.5 72.5 31.855 72.5 49.5 z"
                  className={styles.path_3}
                  transform=" matrix(1 0 0 1 0 0) "
                  stroke-linecap="round"
                />
              </g>
            </svg>
          </Button>
        </li>
        <li>
          <Button
            isDisabled={isFiftyUsed}
            type={!isFiftyUsed ? "joker" : "joker_used"}
            onClick={handleFifty}
            style={{ fontWeight: 700, fontSize: "25px" }}
          >
            50:50
          </Button>
        </li>
      </ul>
    </div>
  );
}

export default Jokers;
