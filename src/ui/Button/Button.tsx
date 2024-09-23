import { ButtonHTMLAttributes, DetailedHTMLProps, FC, ReactNode } from 'react'
import Typography from '../Typography/Typography'
import cn from 'classnames'
import styles from './Button.module.scss'

interface IButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children?: ReactNode
  variant: 'primary' | 'secondary' | 'warning'
  isFlexed?: boolean
}

const Button: FC<IButtonProps> = ({
  children,
  variant = 'primary',
  color,
  isFlexed = false,
  ...props
}) => {
  return (
    <button
      className={cn(styles.root, styles[variant], isFlexed && styles.flexed)}
      {...props}
    >
      <Typography variant="t3" color={color}>
        {children}
      </Typography>
    </button>
  )
}

export default Button
