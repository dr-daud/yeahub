import { baseApi } from '@shared/index'

import type { TQuestionsArgs, TQuestionsResponse } from '../model/types'

const questionsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    questions: build.query<TQuestionsResponse, TQuestionsArgs>({
      query: ({ skills, complexity, limit, specialization }) => ({
        url: `interview-preparation/quizzes/mock/new?`,
        method: 'GET',
        params: { skills, complexity, limit, specialization },
      }),
    }),
  }),
  overrideExisting: false,
})

export const { useQuestionsQuery } = questionsApi
