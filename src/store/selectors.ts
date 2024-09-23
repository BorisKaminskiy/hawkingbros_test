import { RootState } from './store'
import { TUserData } from '~/types/header'
import { TModal } from '~/types/modal'
import { IShoppingCart } from '~/types/shoppingCart'

export const selectors = {
  getAuth: (state: RootState): boolean => state.auth.auth,
  getUser: (state: RootState): TUserData => state.user.user,
  getUserId: (state: RootState): string => state.user.user.UsedGuid,
  getUserName: (state: RootState): string => state.user.user.UserName,
  getModal: (state: RootState): TModal => state.modal.modal,
  getShoppingForm: (state: RootState): IShoppingCart | null =>
    state.shoppingForm.shoppingForm,
}
