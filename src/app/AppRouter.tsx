import { createBrowserRouter } from 'react-router-dom'

import {
  AnswerDetails,
  LearntQuestionsPage,
  MainPage,
  QuestionsPage,
  QuizPage,
} from '@pages/index'

import BaseLayout from './layouts/BaseLayout'

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      { index: true, element: <MainPage /> },
      {
        path: 'quiz',
        element: <QuizPage />,
      },
      { path: 'quiz/questions', element: <QuestionsPage /> },
      {
        path: 'quiz/questions/learnt-questions',
        element: <LearntQuestionsPage />,
      },
      {
        path: 'quiz/questions/learnt-questions/:id',
        element: <AnswerDetails />,
      },
    ],
  },
])
