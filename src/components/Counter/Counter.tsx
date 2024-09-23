import {
  FC,
  DetailedHTMLProps,
  HTMLAttributes,
  ReactElement,
  ChangeEvent,
} from 'react'
import { Button } from '~/ui'
import cn from 'classnames'
import styles from './Counter.module.scss'

interface ICounterProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  val: number
  onValueChange: (value: number) => void
}

const Counter: FC<ICounterProps> = ({
  val,
  onValueChange,
  ...props
}): ReactElement => {
  const onDecrement = () => {
    onValueChange(val - 1)
  }

  const onIncrement = () => {
    onValueChange(val + 1)
  }

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const validValue = e.currentTarget.value.replace(/[^\d]/g, '')
    onValueChange(Number(validValue))
  }

  return (
    <div className={cn(styles.root)} {...props}>
      <Button onClick={onDecrement} variant="primary">
        -
      </Button>
      <input
        type="text"
        value={val}
        onChange={onChange}
        className={cn(styles.input)}
      />
      <Button onClick={onIncrement} variant="primary">
        +
      </Button>
    </div>
  )
}

export default Counter
