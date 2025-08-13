import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "../shared/api/baseApi";
import specializationsReducer from "../entities/specializations/model/specializationsSlice";
import questionsReducer from "../entities/questions/model/questionsSlice";
import skillsReducer from "../entities/skills/model/skillsSlice";
import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from "react-redux";

const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    specializationsReducer,
    questionsReducer,
    skillsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
