import { Route, Routes } from "react-router-dom";

import BaseLayout from "./layouts/BaseLayout";
import MainPage from "../pages/main/ui/Page";
import Quiz from "../pages/quiz/Page";
import QuestionsPage from "../pages/questions/Page";
import LearntQuestions from "../pages/learnt-questions/Page";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<BaseLayout />}>
        <Route index element={<MainPage />} />
        <Route path="quiz" element={<Quiz />}>
          <Route path="questions" element={<QuestionsPage />} />
        </Route>
        <Route path="learnt-questions" element={<LearntQuestions />} />
        <Route path="answer-details" element={<div>Ответ на вопрос</div>} />
        <Route path="*" element={<div>Страница не найдена</div>} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
