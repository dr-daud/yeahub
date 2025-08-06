import { Route, Routes } from "react-router-dom";

import BaseLayout from "./layouts/BaseLayout";
import MainPage from "../pages/main/ui/Page";
import Quiz from "../pages/quiz/ui/Page";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<BaseLayout />}>
        <Route index element={<MainPage />} />
        <Route path="simulator" element={<div>Тренажер</div>} />
        <Route path="quiz" element={<Quiz />} />
        <Route
          path="learnt-questions"
          element={<div>Список пройденнах вопросов</div>}
        />
        <Route path="answer-details" element={<div>Ответ на вопрос</div>} />
        <Route path="*" element={<div>Страница не найдена</div>} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
