import React, { SVGProps } from "react";

export function ArrowUpLeft(props: SVGProps<SVGSVGElement>) {
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
        d="M11.5 4a.5.5 0 0 0 0-1h-8a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 1 0V4.707l12.146 12.147a.5.5 0 0 0 .708-.708L4.707 4H11.5Z"
      />
    </svg>
  );
}
export default ArrowUpLeft;
