import React, { SVGProps } from "react";

export function GamesFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M7.5 4a5.5 5.5 0 1 0 0 11h5a5.5 5.5 0 1 0 0-11h-5ZM6 7.5a.5.5 0 0 1 1 0V9h1.5a.5.5 0 0 1 0 1H7v1.5a.5.5 0 0 1-1 0V10H4.5a.5.5 0 0 1 0-1H6V7.5Zm9 .5a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm-3 4a1 1 0 1 1 0-2a1 1 0 0 1 0 2Z"
      />
    </svg>
  );
}
export default GamesFilled;
