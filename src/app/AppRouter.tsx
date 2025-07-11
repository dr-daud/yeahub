import { Route, Routes } from "react-router";
import BaseLayout from "./layouts/BaseLayout";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<BaseLayout />}>
        <Route path="/simulator" element={<div>Тренажер</div>} />
        <Route path="/quiz" element={<div>Квиз</div>} />
        <Route
          path="/learnt-questions"
          element={<div>Список пройденнах вопросов</div>}
        />
        <Route path="/answer-details" element={<div>Ответ на вопрос</div>} />
        <Route path="*" element={<div>Страница не найдена</div>} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
