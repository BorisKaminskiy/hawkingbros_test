import {
  FC,
  DetailedHTMLProps,
  HTMLAttributes,
  ReactElement,
  ReactNode,
  memo,
} from 'react'
import cn from 'classnames'
import styles from './NavLink.module.scss'

interface INavLinkProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  path?: string
  children: ReactNode
  onClick: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void
  isListing?: boolean
  isActive?: boolean
}

const NavLink: FC<INavLinkProps> = memo(
  ({ children, onClick, isListing, isActive, ...props }): ReactElement => {
    return (
      <a
        onClick={onClick}
        className={cn(
          styles.root,
          isListing && styles.listing,
          isActive && styles.active,
        )}
        {...props}
      >
        {children}
      </a>
    )
  },
)

export default NavLink
