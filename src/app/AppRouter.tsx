import { createBrowserRouter } from "react-router-dom";

import BaseLayout from "./layouts/BaseLayout";
import MainPage from "../pages/main/ui/Page";
import QuestionsPage from "../pages/questions/Page";
import LearntQuestionsPage from "../pages/learnt-questions/Page";
import QuizPage from "../pages/quiz/Page";
import AnswerDetails from "../pages/answer-details/Page";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      { index: true, element: <MainPage /> },
      {
        path: "quiz",
        element: <QuizPage />,
      },
      { path: "quiz/questions", element: <QuestionsPage /> },
      {
        path: "quiz/questions/learnt-questions",
        element: <LearntQuestionsPage />,
      },
      {
        path: "quiz/questions/learnt-questions/:id",
        element: <AnswerDetails />,
      },
    ],
  },
]);
