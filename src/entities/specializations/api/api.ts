import { baseApi } from '@shared/index'

import type { TSpecializationArgs, TSpecializations } from '../model/types'

const specializationsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    specializations: build.query<TSpecializations, TSpecializationArgs>({
      query: ({ page, limit }) => ({
        url: `specializations?page=${page}&limit=${limit}`,
        method: 'GET',
      }),
    }),
  }),
  overrideExisting: false,
})

export const { useSpecializationsQuery } = specializationsApi
