import { FC } from 'react'
import { ISvgProps } from './types'

const CloseIcon: FC<ISvgProps> = ({ ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 40 40"
			fill="#6d4b4b"
			{...props}
    >
      <path d="M10.6663 30.5134L9.48633 29.3334L18.8197 20L9.48633 10.6667L10.6663 9.48669L19.9997 18.82L29.333 9.48669L30.513 10.6667L21.1797 20L30.513 29.3334L29.333 30.5134L19.9997 21.18L10.6663 30.5134Z" />
    </svg>
  )
}

export default CloseIcon
