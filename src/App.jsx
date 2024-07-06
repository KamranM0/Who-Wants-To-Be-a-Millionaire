import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Quiz from "./pages/Quiz";
import { QuizProvider } from "./context/QuizContext";
import FinishPage from "./pages/FinishPage";
import QuizLayout from "./pages/QuizLayout";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/scoreboard"></Route>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="login"></Route>
          <Route path="/notFound"></Route>
          <Route path="quiz" element={<QuizLayout />}>
            <Route index element={<Quiz />}></Route>
            <Route path="finish" element={<FinishPage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
