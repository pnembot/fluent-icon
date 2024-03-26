import React, { SVGProps } from "react";

export function ArrowDownLeft(props: SVGProps<SVGSVGElement>) {
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
        d="M11.5 16a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 1 0v6.793L16.146 3.146a.5.5 0 1 1 .708.708L4.707 16H11.5Z"
      />
    </svg>
  );
}
export default ArrowDownLeft;
