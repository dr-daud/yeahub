import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface State {
  skills: string[];
}

const initialState: State = {
  skills: [],
};

export const skillsSlice = createSlice({
  name: "skills",
  initialState,
  reducers: {
    addSkills: (state, action: PayloadAction<string>) => {
      state.skills = [...state.skills, action.payload];
    },
    removeSkills: (state, action: PayloadAction<string>) => {
      state.skills = state.skills.filter((skill) => skill !== action.payload);
    },
  },
});

export const { addSkills, removeSkills } = skillsSlice.actions;
export default skillsSlice.reducer;
