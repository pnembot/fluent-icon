import React, { SVGProps } from "react";

export function ArrowParagraphFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M17.25 2a.75.75 0 0 1 .75.75v2.5A2.75 2.75 0 0 1 15.25 8h-3.805l1.36 1.495a.75.75 0 0 1-1.11 1.01l-2.5-2.75a.75.75 0 0 1 0-1.01l2.5-2.75a.75.75 0 0 1 1.11 1.01L11.445 6.5h3.805c.69 0 1.25-.56 1.25-1.25v-2.5a.75.75 0 0 1 .75-.75ZM8.305 9.495a.75.75 0 1 0-1.11 1.01L8.555 12H2.75a.75.75 0 0 0 0 1.5h5.805l-1.36 1.495a.75.75 0 0 0 1.11 1.01l2.5-2.75a.75.75 0 0 0 0-1.01l-2.5-2.75Z"
      />
    </svg>
  );
}
export default ArrowParagraphFilled;
