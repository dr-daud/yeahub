import { baseApi } from "../../../shared/api/baseApi";

const questionsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    questions: build.query({
      query: ({ page, limit, specializations }) => ({
        url: `skills?page=${page}&limit=${limit}&specializations=${specializations}`,
        method: "GET",
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useQuestionsQuery } = questionsApi;
