import { baseApi } from "../../shared/api/baseApi";

const specializationsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    specializations: build.query({
      query: ({ page, limit }) => ({
        url: `specializations?page=${page}&limit=${limit}&authorId=a26208c7-8b7b-4cfe-b877-67d85076a570`,
        method: "GET",
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useSpecializationsQuery } = specializationsApi;
