import React, { SVGProps } from "react";

export function DismissSquareMultiple(props: SVGProps<SVGSVGElement>) {
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
        d="M3 5.5A2.5 2.5 0 0 1 5.5 3h7A2.5 2.5 0 0 1 15 5.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 3 12.5v-7ZM5.5 4A1.5 1.5 0 0 0 4 5.5v7A1.5 1.5 0 0 0 5.5 14h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 12.5 4h-7Zm2 13a2.496 2.496 0 0 1-2-1h7a3.5 3.5 0 0 0 3.5-3.5v-7c.607.456 1 1.182 1 2v5a4.5 4.5 0 0 1-4.5 4.5h-5ZM6.854 6.146a.5.5 0 1 0-.708.708L8.293 9l-2.147 2.146a.5.5 0 0 0 .708.708L9 9.707l2.146 2.147a.5.5 0 0 0 .708-.708L9.707 9l2.147-2.146a.5.5 0 0 0-.708-.708L9 8.293L6.854 6.146Z"
      />
    </svg>
  );
}
export default DismissSquareMultiple;
