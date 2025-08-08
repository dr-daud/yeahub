import { baseApi } from "../../../shared/api/baseApi";
import type { TSkills, TSkillsArgs } from "../model/types";

const skillsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    skills: build.query<TSkills, TSkillsArgs>({
      query: ({ page, limit, specializations }) => ({
        url: `skills?page=${page}&limit=${limit}&specializations=${specializations}`,
        method: "GET",
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useLazySkillsQuery, useSkillsQuery } = skillsApi;
