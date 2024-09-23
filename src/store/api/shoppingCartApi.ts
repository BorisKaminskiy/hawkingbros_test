import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { mainUrl, endpoints } from './endpoints'
import { IBusketSummary } from '~/types/busket'
import {
  IShoppingCart,
  IShoppingCartItemChange,
  IShoppingCartResponse,
  IShoppingCartDiscount,
  IShoppingCartItemDelete,
} from '~/types/shoppingCart'

export const shoppingCartApi = createApi({
  reducerPath: 'shoppingCartApi',
  baseQuery: fetchBaseQuery({ baseUrl: mainUrl }),
  tagTypes: ['busketSummary', 'shoppingcart'],
  endpoints: (build) => ({
    getBusketSummary: build.query<IBusketSummary, void>({
      query: () => ({
        url: endpoints.shoppingCart.getBusketSummary(),
      }),
      providesTags: ['busketSummary'],
    }),

    getShoppingCart: build.query<IShoppingCart[], void>({
      query: () => ({
        url: endpoints.shoppingCart.getShoppingCart(),
      }),
      providesTags: ['shoppingcart'],
    }),

    changeQuantity: build.mutation<
      IShoppingCartResponse,
      IShoppingCartItemChange
    >({
      query: (body: IShoppingCartItemChange) => ({
        url: endpoints.shoppingCart.changeQuantity(),
        method: 'POST',
        body,
      }),
      invalidatesTags: ['shoppingcart', 'busketSummary'],
    }),

    deleteShoppingItem: build.mutation<
      IShoppingCartResponse,
      IShoppingCartItemDelete
    >({
      query: (body) => ({
        url: endpoints.shoppingCart.deleteShoppingCartItem(),
        method: 'DELETE',
        body,
      }),
      invalidatesTags: ['shoppingcart', 'busketSummary'],
    }),

    deleteAllShoppingItems: build.mutation<IShoppingCartResponse, void>({
      query: () => ({
        url: endpoints.shoppingCart.deleteAllItems(),
        method: 'DELETE',
      }),
      invalidatesTags: ['shoppingcart', 'busketSummary'],
    }),

    setDiscount: build.mutation<IShoppingCartResponse, IShoppingCartDiscount>({
      query: (body) => ({
        url: endpoints.shoppingCart.discount(),
        method: 'POST',
        body,
      }),
      invalidatesTags: ['shoppingcart', 'busketSummary'],
    }),

    deleteDiscount: build.mutation<IShoppingCartResponse, void>({
      query: () => ({
        url: endpoints.shoppingCart.discount(),
        method: 'DELETE',
      }),
      invalidatesTags: ['shoppingcart', 'busketSummary'],
    }),
  }),
})

export const {
  useGetBusketSummaryQuery,
  useGetShoppingCartQuery,
  useChangeQuantityMutation,
  useDeleteAllShoppingItemsMutation,
  useDeleteShoppingItemMutation,
  useSetDiscountMutation,
  useDeleteDiscountMutation,
} = shoppingCartApi
