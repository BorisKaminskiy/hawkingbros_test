import { createSlice } from '@reduxjs/toolkit'
import { IShoppingCart } from '~/types/shoppingCart'

interface IModalParams {
  shoppingForm: IShoppingCart | null
}

const initialState: IModalParams = {
  shoppingForm: null,
}

const shoppingForm = createSlice({
  name: 'shoppingForm',
  initialState,
  reducers: {
    setShoppingForm: (state, action) => {
      state.shoppingForm = action.payload
    },
  },
})

export const { setShoppingForm } = shoppingForm.actions
export default shoppingForm.reducer
