import React, { SVGProps } from "react";

export function PivotFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M3 5.5v9A2.5 2.5 0 0 0 5.5 17h4.585a1.5 1.5 0 0 1 .354-1.56l1-1a1.5 1.5 0 0 1 2.476.56h.585a.5.5 0 0 0 .5-.5v-.585a1.5 1.5 0 0 1-.56-2.475l1-1a1.5 1.5 0 0 1 1.56-.355V5.5A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5ZM6 5h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm3 1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V6ZM7 9a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h1Zm9.854 2.146a.5.5 0 0 0-.708 0l-1 1a.5.5 0 0 0 .708.708l.146-.147V14.5a1.5 1.5 0 0 1-1.5 1.5h-1.793l.147-.146a.5.5 0 0 0-.708-.708l-1 1a.5.5 0 0 0 0 .708l1 1a.5.5 0 0 0 .708-.708L12.707 17H14.5a2.5 2.5 0 0 0 2.5-2.5v-1.793l.146.147a.5.5 0 0 0 .708-.708l-1-1Z"
      />
    </svg>
  );
}
export default PivotFilled;