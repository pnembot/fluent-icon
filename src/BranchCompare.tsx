import React, { SVGProps } from "react";

export function BranchCompare(props: SVGProps<SVGSVGElement>) {
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
        d="M11.146 6.854a.5.5 0 0 0 .708-.708L10.707 5H12.5A2.5 2.5 0 0 1 15 7.5V12a3 3 0 1 0 1 .17V7.5A3.5 3.5 0 0 0 12.5 4h-1.793l1.147-1.146a.5.5 0 0 0-.708-.708l-2 2a.5.5 0 0 0 0 .708l2 2ZM17 15a2 2 0 1 1-4 0a2 2 0 0 1 4 0ZM8 5a3 3 0 0 1-3 3v4.5A2.5 2.5 0 0 0 7.5 15h1.793l-1.147-1.146a.5.5 0 0 1 .708-.708l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L9.293 16H7.5A3.5 3.5 0 0 1 4 12.5V7.83A3.001 3.001 0 1 1 8 5ZM7 5a2 2 0 1 0-4 0a2 2 0 0 0 4 0Z"
      />
    </svg>
  );
}
export default BranchCompare;