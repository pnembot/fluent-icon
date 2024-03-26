import React, { SVGProps } from "react";

export function WindowFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm1 1v7a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H4Z"
      />
    </svg>
  );
}
export default WindowFilled;
