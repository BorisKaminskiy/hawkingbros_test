import { FC, ReactElement } from 'react'

const Partners: FC = ({ ...props }): ReactElement => {
  return (
    <h1 style={{ textTransform: 'uppercase' }} {...props}>
      Partners
    </h1>
  )
}

export default Partners
