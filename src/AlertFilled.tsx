import React, { SVGProps } from "react";

export function AlertFilled(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      {...props}
    >
      <path
        fill="currentColor"
        d="M12.45 16.002a2.5 2.5 0 0 1-4.9 0h4.9ZM9.998 2c3.149 0 5.744 2.335 5.984 5.355l.013.223l.005.224l-.001 3.606l.954 2.587l.025.085l.016.086l.005.089c0 .315-.196.59-.522.707l-.114.033l-.114.01H3.751a.75.75 0 0 1-.259-.047c-.287-.105-.476-.372-.482-.716l.004-.117l.034-.13l.95-2.584L4 7.793l.004-.225C4.127 4.451 6.771 2 9.998 2Z"
      />
    </svg>
  );
}
export default AlertFilled;
