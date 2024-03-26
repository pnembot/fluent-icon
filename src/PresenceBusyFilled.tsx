import React, { SVGProps } from "react";

export function PresenceBusyFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M20 10c0 5.523-4.477 10-10 10S0 15.523 0 10S4.477 0 10 0s10 4.477 10 10Z"
      />
    </svg>
  );
}
export default PresenceBusyFilled;
