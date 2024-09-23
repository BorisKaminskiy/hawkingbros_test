import {
  FC,
  DetailedHTMLProps,
  HTMLAttributes,
  useEffect,
  useCallback,
} from 'react'
import { useAppDispatch } from '~/store/store'
import { setUser } from '~/store/slices/user'
import { useGetHeaderQuery } from '~/store/api/headerApi'
import { useNavigate } from 'react-router'
import { NavLink } from '~/ui'
import Navigation from '../Navigation/Navigation'
import HeaderDropDown from '../HeaderDropDown/HeaderDropDown'
import BusketButton from '../BusketButton/BusketButton'
import { imageConverter } from '~/utils/imageConverter'
import cn from 'classnames'
import styles from './Header.module.scss'

interface IHeaderProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLHeadElement>, HTMLHeadElement> {
  name?: string
}

const Header: FC<IHeaderProps> = ({ ...props }) => {
  const { data } = useGetHeaderQuery()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(
      setUser({
        UsedGuid: data?.UsedGuid || '',
        UserName: data?.UserName || '',
      }),
    )
  }, [data])

  const onNavLinkClick = useCallback(
    (path: string) => (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      e.preventDefault()
      navigate(path)
    },
    [],
  )

  return (
    <header className={cn(styles.root)} {...props}>
      {data?.LogoImg && (
        <NavLink path="/" onClick={onNavLinkClick('/')}>
          <img width={'65px'} src={imageConverter(data.LogoImg)} />
        </NavLink>
      )}
      <HeaderDropDown />
      <Navigation />
      <BusketButton />
    </header>
  )
}

export default Header
