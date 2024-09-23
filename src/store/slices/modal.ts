import { createSlice } from '@reduxjs/toolkit'
import { TModal } from '~/types/modal'

interface IModalParams {
  modal: TModal
}

const initialState: IModalParams = {
  modal: '',
}

const modal = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setModal: (state, action: { type: string; payload: TModal }) => {
      state.modal = action.payload
    },
  },
})

export const { setModal } = modal.actions
export default modal.reducer
