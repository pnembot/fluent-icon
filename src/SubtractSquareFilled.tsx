import React, { SVGProps } from "react";

export function SubtractSquareFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6Zm.5 6.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1Z"
      />
    </svg>
  );
}
export default SubtractSquareFilled;
