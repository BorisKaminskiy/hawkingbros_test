import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { authApi } from './api/authApi'
import { headerApi } from './api/headerApi'
import { shoppingCartApi } from './api/shoppingCartApi'
import auth from './slices/auth'
import user from './slices/user'
import modal from './slices/modal'
import shoppingForm from './slices/shoppingForm'

const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  [headerApi.reducerPath]: headerApi.reducer,
  [shoppingCartApi.reducerPath]: shoppingCartApi.reducer,
  auth,
  user,
  modal,
  shoppingForm,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(authApi.middleware)
        .concat(headerApi.middleware)
        .concat(shoppingCartApi.middleware),
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
