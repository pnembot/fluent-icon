import React, { SVGProps } from "react";

export function GanttChartFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M2 6.5A2.5 2.5 0 0 1 4.5 4H7v2H4.5a1.5 1.5 0 1 0 0 3H7v7H4.5A2.5 2.5 0 0 1 2 13.5v-7ZM8 16V9.5A1.5 1.5 0 0 0 9.5 11H11v.5a1.5 1.5 0 0 0 1 1.415V16H8Zm2-8h2V4H8v2h.5A1.5 1.5 0 0 1 10 7.5V8Zm5.5 5H13v3h2.5a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 15.5 4H13v4h.5A1.5 1.5 0 0 1 15 9.5v.5h.5a1.5 1.5 0 0 1 0 3Zm-11-6a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4ZM9 9.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Zm3.5 1.5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Z"
      />
    </svg>
  );
}
export default GanttChartFilled;
