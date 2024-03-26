import React, { SVGProps } from "react";

export function PresenceDndFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0S0 4.477 0 10s4.477 10 10 10ZM7 9h6a1 1 0 1 1 0 2H7a1 1 0 1 1 0-2Z"
      />
    </svg>
  );
}
export default PresenceDndFilled;
