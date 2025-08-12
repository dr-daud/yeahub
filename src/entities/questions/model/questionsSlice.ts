import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface State {
  skills: string[];
  complexity?: number[];
  limit?: number;
  specialization: number | null;
}

const initialState: State = {
  skills: [],
  complexity: [],
  limit: 35,
  specialization: null,
};

export const questionsSlice = createSlice({
  name: "specializations",
  initialState,
  reducers: {
    addSkills: (state, action: PayloadAction<string>) => {
      state.skills = [...state.skills, ...action.payload];
    },
    removeSkills: (state, action: PayloadAction<string>) => {
      state.skills = state.skills.filter((skill) => skill !== action.payload);
    },
  },
});

export const { addSkills, removeSkills } = questionsSlice.actions;
export default questionsSlice.reducer;
