import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface State {
  spec: number | null;
}

const initialState: State = {
  spec: null,
};

export const specializationsSlice = createSlice({
  name: "specializations",
  initialState,
  reducers: {
    setSpec: (state, action: PayloadAction<number>) => {
      state.spec = action.payload;
    },
  },
});

export const { setSpec } = specializationsSlice.actions;
export default specializationsSlice.reducer;
