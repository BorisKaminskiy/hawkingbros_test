import {
  FC,
  DetailedHTMLProps,
  HTMLAttributes,
  ReactElement,
  useCallback,
  memo,
} from 'react'
import { useNavigate, useLocation } from 'react-router'
import { Typography, NavLink } from '~/ui'
import cn from 'classnames'
import styles from './Navigation.module.scss'

interface INavigationProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  name?: string
}

const links = [
  { name: 'about', path: '/about' },
  { name: 'our partners', path: '/partners' },
  { name: 'services', path: '/services' },
  { name: 'payments', path: '/payment' },
  { name: 'delivery', path: '/delivery' },
]

const Navigation: FC<INavigationProps> = memo(({ ...props }): ReactElement => {
  const navigate = useNavigate()
  const location = useLocation()

  const onNavLinkClick = useCallback(
    (path: string) => (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      e.preventDefault()
      navigate(path)
    },
    [],
  )

  return (
    <nav className={cn(styles.root)} {...props}>
      {links.map((item) => (
        <NavLink
          path={item.path}
          onClick={onNavLinkClick(item.path)}
          isActive={item.path === location.pathname}
          key={item.name}
        >
          <Typography variant="t2" color="inherit" isUppercase>
            {item.name}
          </Typography>
        </NavLink>
      ))}
    </nav>
  )
})

export default Navigation
