import React, { SVGProps } from "react";

export function CalligraphyPen(props: SVGProps<SVGSVGElement>) {
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
        d="M6 2.5a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 6h.21L5.25 9.08a2.5 2.5 0 0 0 .103 2.335l3.463 5.907a1.373 1.373 0 0 0 2.368 0l3.463-5.907a2.5 2.5 0 0 0 .102-2.335L13.29 6h.21A1.5 1.5 0 0 0 15 4.5v-2a.5.5 0 0 0-1 0v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-2ZM12.184 6l1.662 3.509a1.5 1.5 0 0 1-.062 1.4L10.5 16.511v-5.645a1 1 0 1 0-1 0v5.645L6.216 10.91a1.5 1.5 0 0 1-.062-1.4L7.816 6h4.368Z"
      />
    </svg>
  );
}
export default CalligraphyPen;
