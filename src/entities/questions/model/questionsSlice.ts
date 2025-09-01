import { type PayloadAction, createSlice } from '@reduxjs/toolkit'

import type { TComplexity } from '@features/quiz-settings/level-selector/model/types'

interface State {
  selectedComplexities?: TComplexity[]
  limit: number
  specialization: number | null
  learntQuestions: number[]
}

const initialState: State = {
  selectedComplexities: [],
  limit: 35,
  specialization: null,
  learntQuestions: [],
}

export const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    addLimit: (state, action: PayloadAction<number>) => {
      if (action.payload < 100) {
        state.limit = action.payload + 1
      }
    },
    reduceLimit: (state, action: PayloadAction<number>) => {
      if (action.payload > 1) {
        state.limit = action.payload - 1
      }
    },
    addComplexity: (state, action: PayloadAction<TComplexity>) => {
      state.selectedComplexities = [
        ...(state.selectedComplexities ?? []),
        action.payload,
      ]
    },
    removeComplexity: (state, action: PayloadAction<number>) => {
      state.selectedComplexities = state.selectedComplexities?.filter(
        (item) => item.id !== action.payload,
      )
    },
    addLearntQuestion: (state, action: PayloadAction<number | undefined>) => {
      if (!action.payload) return
      if (state.learntQuestions.includes(action.payload)) return
      state.learntQuestions = [...state.learntQuestions, action.payload]
    },
    removeLearntQuestion: (
      state,
      action: PayloadAction<number | undefined>,
    ) => {
      state.learntQuestions = state.learntQuestions.filter(
        (question) => question !== action.payload,
      )
    },
  },
})

export const {
  addLimit,
  reduceLimit,
  addComplexity,
  removeComplexity,
  addLearntQuestion,
  removeLearntQuestion,
} = questionsSlice.actions
export default questionsSlice.reducer
