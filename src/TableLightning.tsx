import React, { SVGProps } from "react";

export function TableLightning(props: SVGProps<SVGSVGElement>) {
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
        d="M17 5.5A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h6.002a1.497 1.497 0 0 1-1.415-1H8v-3h2.918l.417-1H8V8h4v2.404l.2-.48a1.5 1.5 0 0 1 .8-.805V8h3v1h1V5.5Zm-13 9V13h3v3H5.5l-.144-.007A1.5 1.5 0 0 1 4 14.5ZM12 7H8V4h4v3Zm1-3h1.5l.145.007A1.5 1.5 0 0 1 16 5.5V7h-3V4ZM4 7V5.5l.007-.144A1.5 1.5 0 0 1 5.5 4H7v3H4Zm3 1v4H4V8h3Zm5.61 8a.5.5 0 0 1 .485.621l-.434 1.738c-.121.483.462.827.826.487l4.873-4.548A.75.75 0 0 0 17.848 13h-.404a.5.5 0 0 1-.474-.658l.561-1.684a.5.5 0 0 0-.474-.658h-3.473a.5.5 0 0 0-.462.308l-2.083 5a.5.5 0 0 0 .462.692h1.11Z"
      />
    </svg>
  );
}
export default TableLightning;
