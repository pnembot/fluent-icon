import React, { SVGProps } from "react";

export function TextIndentDecrease(props: SVGProps<SVGSVGElement>) {
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
          d="M6 4.5a.5.5 0 0 1 .5-.5h8a.5.5 0 1 1 0 1h-8a.5.5 0 0 1-.5-.5z"
          fill="currentColor"
        />
        <path
          d="M3.56 7.732a.5.5 0 0 1 .708.707L3.208 9.5l1.06 1.06a.5.5 0 1 1-.707.708L2.146 9.854a.5.5 0 0 1 0-.708l1.415-1.414z"
          fill="currentColor"
        />
        <path
          d="M6.5 9a.5.5 0 0 0 0 1h11a.5.5 0 1 0 0-1h-11z"
          fill="currentColor"
        />
        <path
          d="M6 14.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}
export default TextIndentDecrease;