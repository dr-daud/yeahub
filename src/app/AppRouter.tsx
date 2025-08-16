import { createBrowserRouter } from "react-router-dom";

import BaseLayout from "./layouts/BaseLayout";
import MainPage from "../pages/main/ui/Page";
import QuestionsPage from "../pages/questions/Page";
import LearntQuestionsPage from "../pages/learnt-questions/Page";
import QuizPage from "../pages/quiz/Page";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      { index: true, element: <MainPage /> },
      {
        path: "quiz",
        element: <QuizPage />,
        children: [
          {
            path: "questions",
            element: <QuestionsPage />,
            children: [
              {
                path: "learnt-questions",
                element: <LearntQuestionsPage />,
              },
            ],
          },
        ],
      },
    ],
  },
]);
