import { FC, ReactElement } from 'react'

const Services: FC = ({ ...props }): ReactElement => {
  return (
    <h1 style={{ textTransform: 'uppercase' }} {...props}>
      Services
    </h1>
  )
}

export default Services
