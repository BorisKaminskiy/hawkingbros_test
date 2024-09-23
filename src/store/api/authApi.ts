import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { mainUrl, endpoints } from './endpoints'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: mainUrl }),
  tagTypes: ['auth'],
  endpoints: (build) => ({
    getAuth: build.mutation<void, number>({
      query: (productsValue: number) => ({
        url: endpoints.admin.getAuth(productsValue),
        method: 'POST',
      }),
    }),
  }),
})

export const { useGetAuthMutation } = authApi
