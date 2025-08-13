import { createSlice } from "@reduxjs/toolkit";

interface State {
  complexity?: number[];
  limit?: number;
  specialization: number | null;
}

const initialState: State = {
  complexity: [],
  limit: 35,
  specialization: null,
};

export const questionsSlice = createSlice({
  name: "specializations",
  initialState,
  reducers: {},
});

export default questionsSlice.reducer;
