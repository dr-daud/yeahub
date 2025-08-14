import { baseApi } from "../../../shared/api/baseApi";
import type { TSkills, TSkillsArgs } from "../model/types";

const skillsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    skills: build.query<TSkills, TSkillsArgs>({
      query: ({ page, limit, specializations }) => ({
        url: "skills",
        method: "GET",
        params: { page, limit, specializations },
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useLazySkillsQuery, useSkillsQuery } = skillsApi;
