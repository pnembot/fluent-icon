import React, { SVGProps } from "react";

export function NumberSymbolSquare(props: SVGProps<SVGSVGElement>) {
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
        d="M9.105 6.011a.5.5 0 0 1 .384.594L9.19 8h2.477l.343-1.605a.5.5 0 0 1 .978.21L12.69 8h.811a.5.5 0 0 1 0 1h-1.025l-.428 2H13a.5.5 0 0 1 0 1h-1.167l-.344 1.604a.5.5 0 1 1-.978-.21L10.81 12H8.333l-.344 1.605a.5.5 0 1 1-.978-.21l.3-1.395H6.5a.5.5 0 0 1 0-1h1.024l.43-2H7a.5.5 0 0 1 0-1h1.167l.344-1.605a.5.5 0 0 1 .594-.384ZM8.547 11h2.477l.429-2H8.976l-.429 2ZM3 5.5A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-9ZM5.5 4A1.5 1.5 0 0 0 4 5.5v9A1.5 1.5 0 0 0 5.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 4h-9Z"
      />
    </svg>
  );
}
export default NumberSymbolSquare;
