import { FC, ReactElement } from 'react'

const Payment: FC = ({ ...props }): ReactElement => {
  return (
    <h1 style={{ textTransform: 'uppercase' }} {...props}>
      Payment
    </h1>
  )
}

export default Payment
