import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { mainUrl, endpoints } from './endpoints'
import { IHeaderData } from '~/types/header'

export const headerApi = createApi({
  reducerPath: 'headerApi',
  baseQuery: fetchBaseQuery({ baseUrl: mainUrl }),
  tagTypes: ['header'],
  endpoints: (build) => ({
    getHeader: build.query<IHeaderData, void>({
      query: () => ({
        url: endpoints.shoppingCart.getHeader(),
      }),
      providesTags: ['header'],
    }),
  }),
})

export const { useGetHeaderQuery } = headerApi
