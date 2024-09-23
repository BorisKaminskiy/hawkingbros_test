import { createSlice } from '@reduxjs/toolkit'
import { TUserData } from '~/types/header'

interface IUser {
  user: TUserData
}

const initialState: IUser = {
  user: {
    UsedGuid: '',
    UserName: '',
  },
}

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
    },
  },
})

export const { setUser } = user.actions
export default user.reducer
