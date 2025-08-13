import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { TComplexity } from "../../../features/quiz-settings/level-selector/model/types";

interface State {
  selectedComplexities?: TComplexity[];
  limit: number;
  specialization: number | null;
}

const initialState: State = {
  selectedComplexities: [],
  limit: 35,
  specialization: null,
};

export const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    addLimit: (state, action: PayloadAction<number>) => {
      state.limit = action.payload + 1;
    },
    reduceLimit: (state, action: PayloadAction<number>) => {
      state.limit = action.payload - 1;
    },
    addComplexity: (state, action: PayloadAction<TComplexity>) => {
      state.selectedComplexities = [
        ...(state.selectedComplexities ?? []),
        action.payload,
      ];
    },
    removeComplexity: (state, action: PayloadAction<number>) => {
      state.selectedComplexities = state.selectedComplexities?.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { addLimit, reduceLimit, addComplexity, removeComplexity } =
  questionsSlice.actions;
export default questionsSlice.reducer;
