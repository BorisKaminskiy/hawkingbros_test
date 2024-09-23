import { FC, DetailedHTMLProps, HTMLAttributes } from 'react'
import cn from 'classnames'
import styles from './About.module.scss'

interface IItemsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  name?: string
}

const About: FC<IItemsProps> = ({ ...props }) => {
  return (
    <div className={cn(styles.root)} {...props}>
      <h1 style={{ textTransform: 'uppercase' }}>About</h1>
    </div>
  )
}

export default About
