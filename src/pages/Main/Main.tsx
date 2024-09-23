import { FC, ReactElement } from 'react'

const Main: FC = ({ ...props }): ReactElement => {
  return (
    <h1 style={{ textTransform: 'uppercase' }} {...props}>
      Main
    </h1>
  )
}

export default Main
