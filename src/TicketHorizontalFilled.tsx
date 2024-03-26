import React, { SVGProps } from "react";

export function TicketHorizontalFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M18 6v1.5a.5.5 0 0 1-.5.5a2 2 0 1 0 0 4a.5.5 0 0 1 .5.5V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1.5a.5.5 0 0 1 .5-.5a2 2 0 1 0 0-4a.5.5 0 0 1-.5-.5V6a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1Z"
      />
    </svg>
  );
}
export default TicketHorizontalFilled;