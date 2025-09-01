import { createBrowserRouter } from 'react-router-dom'

import AnswerDetails from '@pages/answer-details/Page'
import LearntQuestionsPage from '@pages/learnt-questions/Page'
import MainPage from '@pages/main/ui/Page'
import QuestionsPage from '@pages/questions/Page'
import QuizPage from '@pages/quiz/Page'

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
