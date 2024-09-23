import { FC, ReactElement } from 'react'
import cn from 'classnames'
import styles from './ButtonSpiner.module.scss'

const ButtonSpiner: FC = ({ ...props }): ReactElement => {
  return <div className={cn(styles.spiner)} {...props}></div>
}

export default ButtonSpiner
