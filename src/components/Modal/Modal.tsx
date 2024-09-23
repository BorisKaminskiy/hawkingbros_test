import { FC } from 'react'
import { useAppSelector, useAppDispatch } from '~/store/store'
import { setModal } from '~/store/slices/modal'
import { selectors } from '~/store/selectors'
import cn from 'classnames'
import styles from './Modal.module.scss'
import { ShoppingForm } from '~/pages/ShoppingCart/components'
import { Portal } from '~/ui'

const Modal: FC = () => {
  window.scrollTo(0, 0)
  const modal = useAppSelector(selectors.getModal)
  const dispatch = useAppDispatch()

  const onModalClose = () => {
    dispatch(setModal(''))
  }
  return (
    <>
      {modal && (
        <Portal>
          <div className={cn(styles.root)}>
            {modal === 'shoppingForm' && (
              <ShoppingForm onModalClose={onModalClose} isModal />
            )}
          </div>
        </Portal>
      )}
    </>
  )
}

export default Modal
