import { DetailedHTMLProps, FC, ReactNode, HTMLAttributes, memo } from 'react'
import cn from 'classnames'
import styles from './Typography.module.scss'

interface ITypographyProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  variant: 't0' | 't1' | 't2' | 't3' | 't4' | 't5' | 't6'
  children: ReactNode
  isUppercase?: boolean
  isCapitalize?: boolean
}

const Typography: FC<ITypographyProps> = memo(
  ({ variant, color, children, isUppercase, ...props }): JSX.Element => {
    return (
      <span
        style={{
          color: color ? `var(--${color})` : 'inherit',
          textTransform: (isUppercase && 'uppercase') || 'none',
        }}
        className={cn(styles.root, styles[variant])}
        {...props}
      >
        {children}
      </span>
    )
  },
)

export default Typography
