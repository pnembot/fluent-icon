import React, { SVGProps } from "react";

export function ChevronRightFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M7.733 4.207a.75.75 0 0 1 1.06.026l5.001 5.25a.75.75 0 0 1 0 1.035l-5 5.25a.75.75 0 1 1-1.087-1.034L12.216 10l-4.51-4.734a.75.75 0 0 1 .027-1.06Z"
      />
    </svg>
  );
}
export default ChevronRightFilled;
