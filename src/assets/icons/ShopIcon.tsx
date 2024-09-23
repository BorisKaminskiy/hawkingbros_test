import { FC } from "react";
import { ISvgProps } from "./types";

const ShopIcon: FC<ISvgProps> = ({
 ...props
}) => {
  
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      stroke="#6d4b4b"
      {...props}
    >
      <path
        d="M2 4H4.33333L5.33333 8M5.33333 8L8.66667 21.3333H26L29.3333 8H5.33333Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.66699 28C9.77156 28 10.667 27.1046 10.667 26C10.667 24.8954 9.77156 24 8.66699 24C7.56242 24 6.66699 24.8954 6.66699 26C6.66699 27.1046 7.56242 28 8.66699 28Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26 28C27.1046 28 28 27.1046 28 26C28 24.8954 27.1046 24 26 24C24.8954 24 24 24.8954 24 26C24 27.1046 24.8954 28 26 28Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
};

export default ShopIcon;
