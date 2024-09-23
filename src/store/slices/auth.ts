import { createSlice } from '@reduxjs/toolkit'
import { IAuthData } from '~/types/auth'

const initialState: IAuthData = {
  auth: false,
}

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.auth = action.payload
    },
  },
})

export const { setAuth } = auth.actions
export default auth.reducer
