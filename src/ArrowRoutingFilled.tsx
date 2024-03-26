import React, { SVGProps } from "react";

export function ArrowRoutingFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M14.78 2.22a.75.75 0 1 0-1.06 1.06L15.44 5h-4.19A2.75 2.75 0 0 0 8.5 7.75v5.5a1.25 1.25 0 0 1-1.106 1.242a2.751 2.751 0 1 0 .004 1.504A2.75 2.75 0 0 0 10 13.25v-5.5c0-.69.56-1.25 1.25-1.25h4.19l-1.72 1.72a.75.75 0 0 0 1.06 1.06l3-3a.75.75 0 0 0 0-1.06l-3-3Z"
      />
    </svg>
  );
}
export default ArrowRoutingFilled;
