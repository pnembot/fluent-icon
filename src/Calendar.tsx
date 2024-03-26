import React, { SVGProps } from "react";

export function Calendar(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      {...props}
    >
      <g fill="none">
        <path d="M7 11a1 1 0 1 0 0-2a1 1 0 0 0 0 2z" fill="currentColor" />
        <path d="M8 13a1 1 0 1 1-2 0a1 1 0 0 1 2 0z" fill="currentColor" />
        <path d="M10 11a1 1 0 1 0 0-2a1 1 0 0 0 0 2z" fill="currentColor" />
        <path d="M11 13a1 1 0 1 1-2 0a1 1 0 0 1 2 0z" fill="currentColor" />
        <path d="M13 11a1 1 0 1 0 0-2a1 1 0 0 0 0 2z" fill="currentColor" />
        <path
          d="M17 5.5A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h9a2.5 2.5 0 0 0 2.5-2.5v-9zM4 7h12v7.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 4 14.5V7zm1.5-3h9A1.5 1.5 0 0 1 16 5.5V6H4v-.5A1.5 1.5 0 0 1 5.5 4z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}
export default Calendar;
