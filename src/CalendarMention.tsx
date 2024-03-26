import React, { SVGProps } from "react";

export function CalendarMention(props: SVGProps<SVGSVGElement>) {
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
        d="M14.5 3A2.5 2.5 0 0 1 17 5.5v4.916a4.964 4.964 0 0 0-1-.316V7H4v7.5A1.5 1.5 0 0 0 5.5 16h4.6c.07.348.177.683.316 1H5.5A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3h9Zm0 1h-9A1.5 1.5 0 0 0 4 5.5V6h12v-.5A1.5 1.5 0 0 0 14.5 4Zm.502 8a3.001 3.001 0 1 0 0 6.003c.46 0 .89-.105 1.283-.293a.5.5 0 1 1 .43.903c-.52.248-1.097.39-1.713.39a4.001 4.001 0 1 1 4.001-4.005v.5a1.502 1.502 0 0 1-2.646.972a2 2 0 1 1-.189-3.093a.5.5 0 0 1 .832.374v1.747a.501.501 0 1 0 1.003 0v-.496A3.001 3.001 0 0 0 15.001 12ZM14 15a1 1 0 1 0 2 0a1 1 0 0 0-2 0Z"
      />
    </svg>
  );
}
export default CalendarMention;