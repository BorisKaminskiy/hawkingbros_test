import { FC, DetailedHTMLProps, HTMLAttributes, useLayoutEffect } from 'react'
import { useGetAuthMutation } from '~/store/api/authApi'
import { useAppSelector, useAppDispatch } from '~/store/store'
import { setAuth } from '~/store/slices/auth'
import { setShoppingForm } from '~/store/slices/shoppingForm'
import { selectors } from '~/store/selectors'
import { Header } from './components'
import { Outlet } from 'react-router'
import { Modal } from '~/components'
import { Spiner } from '~/ui'
import cn from 'classnames'
import styles from './Layout.module.scss'

interface ILayoutProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  name?: string
}

const Layout: FC<ILayoutProps> = ({ ...props }) => {
  const dispatch = useAppDispatch()
  const isAuth = useAppSelector(selectors.getAuth)
  const [getAuth, { isLoading }] = useGetAuthMutation()

  const onGetAuth = async <T,>(
    companiesValue: number,
  ): Promise<T | undefined | void> => {
    return await getAuth(companiesValue).unwrap()
  }

  useLayoutEffect(() => {
    dispatch(setShoppingForm(null))
    onGetAuth(100).then(
      (response) =>
        typeof response === 'boolean' && dispatch(setAuth(response)),
    )
  }, [])

  return (
    <div className={cn(styles.root)} {...props}>
      {isLoading && <Spiner />}
      {isAuth && (
        <>
          <Header />
          <Modal />
          <Outlet />
        </>
      )}
    </div>
  )
}

export default Layout
