import { FC, ReactElement } from 'react'

const Delivery: FC = ({ ...props }): ReactElement => {
  return (
    <h1 style={{ textTransform: 'uppercase' }} {...props}>
      Delivery
    </h1>
  )
}

export default Delivery
