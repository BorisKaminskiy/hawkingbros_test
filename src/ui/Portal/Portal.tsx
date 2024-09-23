import { FC, ReactNode } from 'react'
import { createPortal } from 'react-dom'
import cn from 'classnames'
import styles from './Portal.module.scss'

interface IPortal {
  children: ReactNode
}

const portal = document.getElementById('portal')

const Portal: FC<IPortal> = ({ children }) => {
  return portal
    ? createPortal(<div className={cn(styles.portal)}>{children}</div>, portal)
    : null
}

export default Portal
