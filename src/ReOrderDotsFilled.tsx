import React, { SVGProps } from "react";

export function ReOrderDotsFilled(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      {...props}
    >
      <g fill="none">
        <path
          d="M6.5 6a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3z"
          fill="currentColor"
        />
        <path
          d="M6.5 11a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3z"
          fill="currentColor"
        />
        <path
          d="M8 14.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0z"
          fill="currentColor"
        />
        <path
          d="M13.5 6a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3z"
          fill="currentColor"
        />
        <path
          d="M15 9.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0z"
          fill="currentColor"
        />
        <path
          d="M13.5 16a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}
export default ReOrderDotsFilled;
