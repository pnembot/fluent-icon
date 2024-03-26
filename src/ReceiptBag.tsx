import React, { SVGProps } from "react";

export function ReceiptBag(props: SVGProps<SVGSVGElement>) {
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
        d="M4 5a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v7h3v2a3 3 0 0 1-3 3h-5v-1h4V5a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3.171A2.996 2.996 0 0 0 4 8V5Zm7.5 5H8.83a2.998 2.998 0 0 0-.594-1H11.5a.5.5 0 0 1 0 1Zm3.5 3v3a2 2 0 0 0 2-2v-1h-2ZM7 6.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5ZM4 9c.364 0 .706.097 1 .268A2 2 0 0 1 8 11v1h.5a.5.5 0 0 1 .5.5V17a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-4.5a.5.5 0 0 1 .5-.5H2v-1a2 2 0 0 1 2-2Zm1 3v-1a1 1 0 1 0-2 0v1h2Zm.75-1.969c.16.287.25.618.25.969v1h1v-1a1 1 0 0 0-1.25-.969Z"
      />
    </svg>
  );
}
export default ReceiptBag;
