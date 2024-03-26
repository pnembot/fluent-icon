import React, { SVGProps } from "react";

export function LinkSquare(props: SVGProps<SVGSVGElement>) {
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
        d="M4.5 3A1.5 1.5 0 0 0 3 4.5v6A1.5 1.5 0 0 0 4.5 12H6v1H4.5A2.5 2.5 0 0 1 2 10.5v-6A2.5 2.5 0 0 1 4.5 2h6A2.5 2.5 0 0 1 13 4.5v6a2.5 2.5 0 0 1-2.5 2.5H9v-1h1.5a1.5 1.5 0 0 0 1.5-1.5v-6A1.5 1.5 0 0 0 10.5 3h-6Zm5 4H11v1H9.5A1.5 1.5 0 0 0 8 9.5v6A1.5 1.5 0 0 0 9.5 17h6a1.5 1.5 0 0 0 1.5-1.5v-6A1.5 1.5 0 0 0 15.5 8H14V7h1.5A2.5 2.5 0 0 1 18 9.5v6a2.5 2.5 0 0 1-2.5 2.5h-6A2.5 2.5 0 0 1 7 15.5v-6A2.5 2.5 0 0 1 9.5 7Z"
      />
    </svg>
  );
}
export default LinkSquare;
