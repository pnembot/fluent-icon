import React, { SVGProps } from "react";

export function TableCalculator(props: SVGProps<SVGSVGElement>) {
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
        d="M17 5.5A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17H11v-1H8v-3h3v-1H8V8h4v.5c.29-.219.63-.375 1-.45V8h4V5.5Zm-13 9V13h3v3H5.5l-.144-.007A1.5 1.5 0 0 1 4 14.5ZM12 7H8V4h4v3Zm1-3h1.5l.145.007A1.5 1.5 0 0 1 16 5.5V7h-3V4ZM4 7V5.5l.007-.144A1.5 1.5 0 0 1 5.5 4H7v3H4Zm3 1v4H4V8h3Zm5 2.5A1.5 1.5 0 0 1 13.5 9h4a1.5 1.5 0 0 1 1.5 1.5v7a1.5 1.5 0 0 1-1.5 1.5h-4a1.5 1.5 0 0 1-1.5-1.5v-7Zm2.5 2.5h-1a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1Zm3.5.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0 0 1h1a.5.5 0 0 0 .5-.5ZM14.5 15h-1a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1Zm3.5.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0 0 1h1a.5.5 0 0 0 .5-.5ZM14.5 17h-1a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1Zm3.5.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0 0 1h1a.5.5 0 0 0 .5-.5ZM13.5 10a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-4Z"
      />
    </svg>
  );
}
export default TableCalculator;
