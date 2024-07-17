import {
  act,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "react";
import { getRandomQuestion, shuffleArray } from "../utils/QuestionsUtil";
import { useNavigate } from "react-router-dom";
const questionsOffline = {
  questions: [
    {
      question: "What is the biggest lake in the world",
      difficulty: 1,
      correctAnswer: "Caspian Sea",
      otherAnswers: ["Baikal Lake", "Amazon River", "Missisipi Lake"],
      id: 1,
    },
    {
      question: "What is the capital city of Turkey",
      difficulty: 1,
      correctAnswer: "Ankara",
      otherAnswers: ["Sivas", "Istanbul", "Konya"],
      id: 2,
    },
    {
      question: "A magnet would most likely attract which of the following?",
      difficulty: 1,
      correctAnswer: "Metal",
      otherAnswers: ["Plastic", "Wood", "Rock"],
      id: 3,
    },
    {
      question: "Where did Scotch whisky originate?",
      difficulty: 1,
      correctAnswer: "Scotland",
      otherAnswers: ["England", "Uganda", "Wales"],
      id: 4,
    },
    {
      question:
        "In the United States, what is traditionally the proper way to address a judge?",
      difficulty: 1,
      correctAnswer: "Your honor",
      otherAnswers: ["Muellim", "Hey bro", "By their name"],
      id: 5,
    },
    {
      question: "If someone asked to see your ID, what might you show them?",
      difficulty: 2,
      correctAnswer: "ID",
      otherAnswers: ["Finger", "Hand", "Head"],
      id: 6,
    },
    {
      question:
        "Due to the geographical areas they represented, the opposing sides of the US Civil War were known by what names?",
      difficulty: 2,
      correctAnswer: "The North and South",
      otherAnswers: [
        "The Hills and the Valleys",
        "The Kool and the Gang",
        "The West and East",
      ],
      id: 7,
    },
    {
      question:
        "According to the old saying, 'love of' what 'is the root of all evil'?",

      difficulty: 2,
      correctAnswer: "Money",
      otherAnswers: ["Food", "Clothes", "Book"],
      id: 8,
    },
    {
      question:
        "When a person is rudely ignored, he is said to be getting what?",

      difficulty: 2,
      correctAnswer: "Cold shoulder",
      otherAnswers: ["Hot feet", "Normal head", "Low kick"],
      id: 9,
    },
    {
      question: "Who is considered to be the GOAT of UFC?",

      difficulty: 2,
      correctAnswer: "Jon Jones",
      otherAnswers: ["Conor Mcgregor", "Khabib Nurmagomedov", "Dustin Poirier"],
      id: 10,
    },
    {
      question: "A common piece of advice goes 'be there or be' what?",

      difficulty: 3,
      correctAnswer: "Square",
      otherAnswers: ["Round", "Triangle", "Line"],
      id: 11,
    },
    {
      question: "Who won the World Cup 2022",

      difficulty: 3,
      correctAnswer: "Argentina",
      otherAnswers: ["Ghana", "England", "France"],
      id: 12,
    },
    {
      question: "One of the following is Pink Floyd album:",

      difficulty: 3,
      correctAnswer: "The Wall",
      otherAnswers: ["Comfortably Numb", "The Brick", "Dust"],
      id: 13,
    },
    {
      question: "What is the best team in Turkey Super League?",

      difficulty: 3,
      correctAnswer: "Besiktas",
      otherAnswers: ["Galatasaray", "Fenerbahce", "Caykur Rizespor"],
      id: 14,
    },
    {
      question:
        "Something in an obvious location is said to be 'right under your' what?",

      difficulty: 3,
      correctAnswer: "Nose",
      otherAnswers: ["Mattress", "Mouth", "Head"],
      id: 15,
    },
  ],
};

const QuizContext = createContext();
const moneyLadder = [
  0, 50, 150, 300, 500, 1000, 2000, 4000, 8000, 16000, 32000, 64000, 125000,
  250000, 500000, 1000000,
];
const DEFAULT_SEC = 300;
const initState = {
  questions: [],
  error: "",
  currentQuestion: null,
  isLoading: false,
  numOfQuestion: 0,
  difficultyLevel: 1,
  usedQuestions: [],
  isAnswered: false,
  moneyIndex: 0,
  isCorrectSelected: null,
  secondsRemaining: DEFAULT_SEC,
};

const BASE_URL = "http://localhost:3000/questions/";
function reducer(state, action) {
  switch (action.type) {
    case "questions/loading":
      return { ...state, isLoading: true };
    case "questions/loaded":
      return {
        ...state,
        isLoading: false,
        questions: action.payload,
      };
    case "start":
      return {
        ...state,
        difficultyLevel: 1,
        numOfQuestion: 1,
        usedQuestions: [...state.usedQuestions, action.payload],
        currentQuestion: action.payload,
        // options: [...action.payload.otherAnswers, action.payload.correctAnswer],
        moneyIndex: 0,
        secondsRemaining: DEFAULT_SEC,
      };
    case "clicked":
      return { ...state, isAnswered: true };
    case "wrongAnswer":
      return {
        ...initState,
        questions: state.questions,
        isAnswered: false,
        isCorrectSelected: false,
        moneyIndex: state.moneyIndex,
      };
    case "correctAnswer":
      let diffLevel;
      if (state.numOfQuestion < 4) diffLevel = 1;
      else if (state.numOfQuestion < 9) diffLevel = 2;
      else diffLevel = 3;

      return {
        ...state,
        isCorrectSelected: true,
        currentQuestion: action.payload,
        difficultyLevel: diffLevel,
        isAnswered: false,
        numOfQuestion: state.numOfQuestion + 1,
        usedQuestions: [...state.usedQuestions, action.payload],
        options: [...action.payload.otherAnswers, action.payload.correctAnswer],
        moneyIndex: state.moneyIndex + 1,
        secondsRemaining: DEFAULT_SEC,
      };
    case "finish":
      return {
        ...initState,
        questions: state.questions,
        isAnswered: false,
        moneyIndex: state.moneyIndex + 1,
      };
    case "reset":
      return {
        ...initState,
        questions: state.questions,
      };
    case "error":
      return { ...state, isLoading: false, error: action.payload };
    case "tick": {
      return { ...state, secondsRemaining: state.secondsRemaining - 1 };
    }
    default:
      throw new Error("Unknown action");
    // case "restart":
    //   return {
    //     ...state,
    //     difficultyLevel: 1,
    //     usedQuestions: [action.payload],
    //     currentQuestion: action.payload,
    //     options: [...action.payload.otherAnswers, action.payload.correctAnswer],
    //     i: 0,
    //     status: "started",
    //   };

    // case "nextQuestion":
    //   let diffLevel;
    //   if (state.numOfQuestion < 4) diffLevel = 1;
    //   else if (state.numOfQuestion < 9) diffLevel = 2;
    //   else diffLevel = 3;

    //   return {
    //     ...state,
    //     currentQuestion: action.payload,
    //     difficultyLevel: diffLevel,
    //     numOfQuestion: state.numOfQuestion + 1,
    //     usedQuestions: [...state.usedQuestions, action.payload],
    //     isAnswered: false,
    //     options: [...action.payload.otherAnswers, action.payload.correctAnswer],
    //     i: state.i + 1,
    //   };
  }
}
function QuizProvider({ children }) {
  const [
    {
      questions,
      error,
      isLoading,
      difficultyLevel,
      usedQuestions,
      currentQuestion,
      isAnswered,
      numOfQuestion,
      moneyIndex,
      isCorrectSelected,
      secondsRemaining,
    },
    dispatch,
  ] = useReducer(reducer, initState);
  const usedQuestionsIds = usedQuestions?.map((el) => el?.id);
  const notUsedQuestions = usedQuestionsIds
    ? questions.filter((el) => !usedQuestionsIds.includes(el.id))
    : null;
  const money = moneyLadder[moneyIndex];
  const shownMoney = moneyLadder[moneyIndex + 1];
  useEffect(() => {
    async function getQuestions() {
      try {
        dispatch({ type: "questions/loading" });
        console.log(questionsOffline.questions);
        dispatch({
          type: "questions/loaded",
          payload: questionsOffline.questions,
        });
      } catch (error) {
        dispatch({ type: "error", payload: error.message });
      }
    }
    getQuestions();
  }, []);
  function tickTimer() {
    if (secondsRemaining <= 0) dispatch("wrongAnswer");
    if (!isAnswered) dispatch({ type: "tick" });
    return;
  }

  function handleOptionClick(isCorrect) {
    if (!isCorrect) {
      return dispatch({ type: "wrongAnswer" });
    }
    if (numOfQuestion === 15) {
      return dispatch({ type: "finish" });
    }
    const currentQuestion = getRandomQuestion(
      notUsedQuestions,
      difficultyLevel
    );
    dispatch({ type: "correctAnswer", payload: currentQuestion });
  }

  function handleStartGame() {
    const currentQuestion = getRandomQuestion(questions, difficultyLevel);
    dispatch({ type: "start", payload: currentQuestion });
  }
  function restartQuiz() {
    const currentQuestion = getRandomQuestion(questions, difficultyLevel);
    dispatch({ type: "restart", payload: currentQuestion });
  }
  function resetingQuiz() {
    const currentQuestion = getRandomQuestion(questions, difficultyLevel);
    dispatch({ type: "start", payload: currentQuestion });
  }
  function handleAnswered() {
    dispatch({ type: "clicked" });
  }

  return (
    <QuizContext.Provider
      value={{
        questions,
        error,
        usedQuestions,
        notUsedQuestions,
        handleStartGame,
        currentQuestion,
        handleOptionClick,
        isAnswered,
        numOfQuestion,
        money,
        shownMoney,
        resetingQuiz,
        restartQuiz,
        isCorrectSelected,
        handleAnswered,
        tickTimer,
        secondsRemaining,
        DEFAULT_SEC,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}
function useQuiz() {
  return useContext(QuizContext);
}

export { QuizProvider, useQuiz };
